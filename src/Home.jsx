
import Banner from "./componnet/banner/Banner"
import Questions from "./componnet/questions/Questions"
import Forest from "./componnet/forest/Forest"

export default function Home() {
  return (
    <div>

     <Banner></Banner>
     <Questions></Questions>
     <Forest></Forest>
     <div className="h-[1500px] w-full border border-red-900 "></div>
    </div>
  )
}
