
import getEducational from "@/app/libs/getEducational"


export default async function educationalInfo({params:{ id: number }}) {
  const educationalInfo = await getEducational(id)
  return (
       <div>
          {educationalInfo.title}
       </div>
  )
}