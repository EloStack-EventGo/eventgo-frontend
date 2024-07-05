import EventCard from '../components/EventCard'

export default function TopPicks() {
  return (
    <div className="flex flex-row justify-between pt-5 h-[1000px] px-5">
      <EventCard source={'/sample.webp'} />
      <EventCard source={'/sample2.webp'} />
      <EventCard source={'/sample3.webp'} />
      <EventCard source={'/sample4.webp'} />
    </div>
  )
}
