import './Toolbar.css'

// toolbar of features/operations
export default function Toolbar() {
    return (
      <div className="toolbar my-auto rounded d-flex flex-column gap-2 bg-primary">
        <button>Brightness</button>
        <button>Saturation</button>
        <button>Sharpness</button>
        <button>Grayscale</button>
        <button>Crop</button>
        <button>Rotate</button>
        <button>Flip Right</button>
        <button>Flip Left</button>
      </div>
    );
  }
  

  