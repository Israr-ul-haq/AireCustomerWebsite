import Script from "next/script";

export default function useScripts() {
  return (
    <>
      <Script
        async
        defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDYRy_ggdercsN2hHQ-gmNTu8AhV_mmsq0"
      />
    </>
  );
}
