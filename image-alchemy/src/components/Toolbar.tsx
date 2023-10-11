import './Toolbar.css'

// toolbar of features/operations
export default function Toolbar() {
    return (
      <div className="toolbar my-auto rounded d-flex flex-column gap-2 bg-primary">
        <button><i className="bi bi-brightness-high-fill"></i></button>     
        <button>Saturation</button>
        <button>
          <svg width="16" height="16" viewBox="0 0 50 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M48 25C48 37.7025 37.7025 48 25 48C12.2975 48 2 37.7025 2 25C2 12.2975 12.2975 2 25 2C37.7025 2 48 12.2975 48 25Z" fill="#DE2626" stroke="black" stroke-width="4"/>
          </svg>
        </button>
        <button>Sharpness</button>
        <button>Grayscale</button>
        <button>Crop</button>
        <button>Rotate</button>
        <button>Flip Right</button>
        <button>Flip Left</button>
      </div>
    );
  }
  

  