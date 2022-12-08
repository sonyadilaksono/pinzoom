import Lightbox from "./Lightbox";
import { Pager } from "./Pager";

import "./styles.css";

const images = [
  {
    url:
      "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-p-1-ae-0036.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=b52c28c28aa88a6e524455c80ea9ed85"
  },
  {
    url:
      "https://images.pexels.com/photos/731022/pexels-photo-731022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    url:
      "https://images.pexels.com/photos/2523934/pexels-photo-2523934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    url:
      "https://images.pexels.com/photos/3478876/pexels-photo-3478876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    url:
      "https://images.pexels.com/photos/3860312/pexels-photo-3860312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    url:
      "https://images.pexels.com/photos/4128416/pexels-photo-4128416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    url:
      "https://images.pexels.com/photos/4103244/pexels-photo-4103244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    url:
      "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    url:
      "https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    url:
      "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    url:
      "https://images.pexels.com/photos/1294062/pexels-photo-1294062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  }
];

export default function App() {
  return (
    <div className="App">
      <Lightbox
        current={5}
        images={images}
        onChange={(index) => console.log("index:", index)}
      />
    </div>
  );
}
