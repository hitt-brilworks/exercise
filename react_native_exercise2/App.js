import CityGuideGalleryScreen from "./app/screens/CityGuideGalleryScreen";
import { OrientationProvider } from "./app/contexts/orientationContext";

export default function App() {
  return (
    <OrientationProvider>
      <CityGuideGalleryScreen />
    </OrientationProvider>
  );
}
