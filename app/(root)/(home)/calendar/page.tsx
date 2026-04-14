import CallList from '@/components/CallList';
import Calendar from '@/components/Calendar';

const PreviousPage = () => {
  return (
    <section className="flex size-full flex-col text-black p-8 gap-8 bg-neutral-50">
      <h1 className="text-xl font-semibold">Мій Кабінет</h1>
      {/* <div className="flex flex-1 rounded-xl bg-white">

      </div> */}
      <div className="flex p-4 rounded-xl bg-white">
        <Calendar/>
      </div>

      {/* <CallList type="recordings" /> */}
    </section>
  );
};

export default PreviousPage;
