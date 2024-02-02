"use client";

import { useState } from 'react';
import {data} from '../assets/data/educationals.js';

export default function VideosPage() {
  const [videos, setVideos] = useState(data);

  return (
<>
  <h2>ویدئوهای آموزشی</h2>
{/* <iframe src="https://www.aparat.com/video/video/embed/videohash/NZFuO/vt/frame" 
 allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"
 >
</iframe> */}
 
 <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {videos.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-b-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500  text-white rounded-full p-1">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
</>
  );
}
