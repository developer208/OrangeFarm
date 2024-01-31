# Orange Farm (Evaluation Assignment)

Building a Frontend Dashboard App with Backend Graph Integration

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Links

Deployed Link :- https://orange-farm.vercel.app/  
Github Repo Link :- https://github.com/developer208/OrangeFarm  
Down Sampled Graph Api :- https://orange-farm.vercel.app/api/data

## Screenshots

Desktop-Width :- 1440px
![App Screenshot](https://res.cloudinary.com/dqyvomyqy/image/upload/v1706716316/Orange_farm/kkn19qungbkyzntmp1si.png)

Tablet-Width :- 960px
![App Screenshot](https://res.cloudinary.com/dqyvomyqy/image/upload/v1706716315/Orange_farm/vxjxdgrvxzc8jmmfx3gq.png)

Iphone XR-Width :- 440px
![App Screenshot](https://res.cloudinary.com/dqyvomyqy/image/upload/v1706716314/Orange_farm/y6fwr37syieou8ly7aty.png)

## Frontend Technologies

1. Next JS 14 App Router
2. Css Framework - Tailwind Css
3. Graph Library - recharts
4. Icons - Table-Icons
5. Extra Icons - react-icons npm package

## Backend Technologies

1. Next JS as a Backend Framework
2. Api Creation
3. dataset.csv

## Downsampling Algorithm

It is same as in dsa we find frequency of each element in array
Worst Case Time Complexity - O(N\*2)
Worst Case Space Complexity - O(N)

Data Structure Used :- Map
Time Complexity :- get() - O(N)
set() - O(1)

## Logic

for (let i = 0; i < data.length; i++) {
const prev_arr = data[i].Timestamp.split(" ");
const prev_new_array = prev_arr[0];
const prev_str = prev_new_array.substring(3);
const val = Number(data[i].Profit_Percentage);
if (map.get(prev_str) === undefined) {
map.set(prev_str, val);
} else {
let curr = map.get(prev_str);
map.set(prev_str, curr + val);
}
}
