import { useState, useRef, useEffect } from "react";
import { X, Pen, Eraser, Highlighter, Trash2, Undo, Redo, Download, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InteractiveDemoProps {
  isOpen: boolean;
  onClose: () => void;
}

type Tool = "pen" | "eraser" | "highlighter";

interface Point {
  x: number;
  y: number;
}

interface Stroke {
  points: Point[];
  tool: Tool;
  color: string;
  size: number;
}

const colors = [
  "#1a1a2e", // Dark blue-black
  "#3b82f6", // Blue
  "#ef4444", // Red
  "#22c55e", // Green
  "#f59e0b", // Amber
  "#8b5cf6", // Purple
];

const InteractiveDemo = ({ isOpen, onClose }: InteractiveDemoProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState<Tool>("pen");
  const [color, setColor] = useState(colors[0]);
  const [brushSize, setBrushSize] = useState(3);
  const [strokes, setStrokes] = useState<Stroke[]>([]);
  const [currentStroke, setCurrentStroke] = useState<Stroke | null>(null);
  const [undoneStrokes, setUndoneStrokes] = useState<Stroke[]>([]);

  // Redraw canvas whenever strokes change
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas with paper-like background
    ctx.fillStyle = "#f5f5f0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid lines for notebook effect
    ctx.strokeStyle = "#e0e0d8";
    ctx.lineWidth = 1;
    for (let y = 30; y < canvas.height; y += 30) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Redraw all strokes
    [...strokes, currentStroke].forEach((stroke) => {
      if (!stroke || stroke.points.length < 2) return;

      ctx.beginPath();
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      if (stroke.tool === "eraser") {
        ctx.strokeStyle = "#f5f5f0";
        ctx.lineWidth = stroke.size * 3;
      } else if (stroke.tool === "highlighter") {
        ctx.strokeStyle = stroke.color + "40";
        ctx.lineWidth = stroke.size * 4;
      } else {
        ctx.strokeStyle = stroke.color;
        ctx.lineWidth = stroke.size;
      }

      ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
      stroke.points.forEach((point) => {
        ctx.lineTo(point.x, point.y);
      });
      ctx.stroke();
    });
  }, [strokes, currentStroke]);

  // Initialize canvas size
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [isOpen]);

  const getCanvasPoint = (e: React.MouseEvent | React.TouchEvent): Point | null => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    if ("touches" in e) {
      const touch = e.touches[0];
      return {
        x: (touch.clientX - rect.left) * scaleX,
        y: (touch.clientY - rect.top) * scaleY,
      };
    } else {
      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
      };
    }
  };

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    const point = getCanvasPoint(e);
    if (!point) return;

    setIsDrawing(true);
    setCurrentStroke({
      points: [point],
      tool,
      color,
      size: brushSize,
    });
    setUndoneStrokes([]);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || !currentStroke) return;

    const point = getCanvasPoint(e);
    if (!point) return;

    setCurrentStroke({
      ...currentStroke,
      points: [...currentStroke.points, point],
    });
  };

  const stopDrawing = () => {
    if (currentStroke && currentStroke.points.length > 1) {
      setStrokes([...strokes, currentStroke]);
    }
    setCurrentStroke(null);
    setIsDrawing(false);
  };

  const undo = () => {
    if (strokes.length === 0) return;
    const lastStroke = strokes[strokes.length - 1];
    setStrokes(strokes.slice(0, -1));
    setUndoneStrokes([...undoneStrokes, lastStroke]);
  };

  const redo = () => {
    if (undoneStrokes.length === 0) return;
    const lastUndone = undoneStrokes[undoneStrokes.length - 1];
    setUndoneStrokes(undoneStrokes.slice(0, -1));
    setStrokes([...strokes, lastUndone]);
  };

  const clearCanvas = () => {
    setStrokes([]);
    setCurrentStroke(null);
    setUndoneStrokes([]);
  };

  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = "abook-note.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-2xl shadow-2xl w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden animate-fade-up">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Layers className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">ABook Interactive Demo</h2>
              <p className="text-sm text-muted-foreground">Try the notebook experience</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-4 px-6 py-3 border-b border-border bg-secondary/30">
          {/* Tools */}
          <div className="flex items-center gap-1 bg-background rounded-lg p-1 border border-border">
            <button
              onClick={() => setTool("pen")}
              className={`p-2 rounded-md transition-colors ${
                tool === "pen" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
              }`}
              title="Pen"
            >
              <Pen className="w-4 h-4" />
            </button>
            <button
              onClick={() => setTool("highlighter")}
              className={`p-2 rounded-md transition-colors ${
                tool === "highlighter" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
              }`}
              title="Highlighter"
            >
              <Highlighter className="w-4 h-4" />
            </button>
            <button
              onClick={() => setTool("eraser")}
              className={`p-2 rounded-md transition-colors ${
                tool === "eraser" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
              }`}
              title="Eraser"
            >
              <Eraser className="w-4 h-4" />
            </button>
          </div>

          {/* Colors */}
          <div className="flex items-center gap-1.5">
            {colors.map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                className={`w-7 h-7 rounded-full transition-transform ${
                  color === c ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-110" : "hover:scale-110"
                }`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>

          {/* Brush size */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Size:</span>
            <input
              type="range"
              min="1"
              max="10"
              value={brushSize}
              onChange={(e) => setBrushSize(Number(e.target.value))}
              className="w-20 accent-primary"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1 ml-auto">
            <Button variant="ghost" size="icon" onClick={undo} disabled={strokes.length === 0} title="Undo">
              <Undo className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={redo} disabled={undoneStrokes.length === 0} title="Redo">
              <Redo className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={clearCanvas} title="Clear">
              <Trash2 className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={downloadCanvas} title="Download">
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Canvas with Remarkable-style frame */}
        <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-[#d4d4d4] via-[#e8e8e8] to-[#c8c8c8] p-4 md:p-6">
          {/* Outer frame - aluminum/grey edge */}
          <div className="w-full h-full rounded-lg bg-gradient-to-br from-[#b0b0b0] via-[#d0d0d0] to-[#a0a0a0] p-[3px] shadow-xl">
            {/* Inner white bezel */}
            <div className="w-full h-full rounded-md bg-gradient-to-br from-[#ffffff] via-[#f8f8f8] to-[#ececec] p-3">
              {/* Paper surface */}
              <div className="w-full h-full relative bg-[#f5f5f0] rounded-sm shadow-inner overflow-hidden">
                <canvas
                  ref={canvasRef}
                  className="absolute inset-0 w-full h-full cursor-crosshair touch-none"
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer hint with eco-friendly message */}
        <div className="px-6 py-3 border-t border-border bg-secondary/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-sm text-muted-foreground">
              Draw with your mouse or finger • Use tools above to switch between pen, highlighter, and eraser
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 font-medium">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.5 9a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM8 5.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm7.197 2.803a.75.75 0 0 0-1.061-1.061l-4.5 4.5a.75.75 0 0 0 1.06 1.061l4.5-4.5Z" clipRule="evenodd"/>
                </svg>
                🌱 Eco-Friendly • Zero Paper • E-Ink Display
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDemo;
