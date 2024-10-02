import './App.css';
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider, isLoaded, loadingProgression, error } = useUnityContext({
    loaderUrl: "Build/Export.loader.js",
    dataUrl: "Build/Export.data",
    frameworkUrl: "Build/Export.framework.js",
    codeUrl: "Build/Export.wasm",
  });

  if (error) {
    console.error("Unity WebGL Error:", error);
  }

  return (
    <div>
      {!isLoaded && <p>Loading... {Math.round(loadingProgression * 100)}%</p>}
      <Unity className="game" unityProvider={unityProvider} />
    </div>
  );
}

export default App;