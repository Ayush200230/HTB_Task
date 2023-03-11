import AllPosts from "@/components/AllPosts";
import Bestoftheweek from "@/components/Bestoftheweek";
import Navbar from "@/components/Navbar";
import Newposts from "@/components/Newposts";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowImage(false);
    }, 2000);
  }, []);
  return (
    <div>
      {showImage && (
        <div className="image-container">
          <Image src="/landing.webp" alt="Your Image" width="1600" height="1" />
        </div>
      )}
      <div>
        <AllPosts />
        <Bestoftheweek />
        <Newposts />
      </div>
    </div>
  );
}
