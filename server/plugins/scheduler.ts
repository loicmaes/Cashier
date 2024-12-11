import { useScheduler } from "#scheduler";

export default defineNitroPlugin(() => {
  const scheduler = useScheduler();

  scheduler.run(() => {
    console.error("cool beans! I run once a day at 1:30PM 😃");
  }).dailyAt(13, 30);
});
