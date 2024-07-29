<template>
  <div class="container">
    <vue-particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      url="http://foo.bar/particles.json"
    />

    <vue-particles
      style="z-index: 1"
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="{
        background: {
          color: {
            value: '#328da8',
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onclick: { enable: false, mode: 'repulse' },
            onhover: {
              enable: true,
              mode: 'bubble',
              parallax: { enable: false, force: 2, smooth: 10 },
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 200,
              duration: 2,
              opacity: 0,
              size: 0,
              speed: 3,
            },
            grab: { distance: 400, line_linked: { opacity: 1 } },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
            repulse: { distance: 400, duration: 0.4 },
          },
        },
        particles: {
          color: { value: '#ffffff' },
          line_linked: {
            color: '#ffffff',
            distance: 150,
            enable: false,
            opacity: 0.4,
            width: 1,
          },
          move: {
            attract: { enable: false, rotateX: 600, rotateY: 600 },
            bounce: false,
            direction: 'none',
            enable: true,
            out_mode: 'out',
            random: true,
            speed: 0.2,
            straight: false,
          },
          number: { density: { enable: true, value_area: 800 }, value: 600 },
          opacity: {
            anim: { enable: true, opacity_min: 0.3, speed: 5, sync: false },
            random: {
              enable: true,
              minimumValue: 0.3,
            },
            value: 0.6,
          },
          shape: {
            type: 'circle',
          },
          size: {
            anim: { enable: false, size_min: 0.3, speed: 4, sync: false },
            random: false,
            value: 1,
          },
        },
        detectRetina: true,
      }"
    />
  </div>

  <div class="container-timer">
    <div class="counter text-center">
      <Leaf size="100" absolute-stroke-width="true" class="icon"></Leaf>

      <h2 class="pt-4">Próximamente: Tu ruta hacia el bienestar emocional</h2>
      <h3 class="pt-3">Estamos puliendo los detalles finales.</h3>
      <h3>¡Mantente en sintonía y vuelve a visitarnos!</h3>
      <p class="fst-italic pt-3">
        En
        <span
          >{{ days }} días, {{ hours }} horas, {{ minutes }} minutos y
          {{ seconds }} segundos</span
        >
      </p>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { Leaf } from "lucide-vue-next";
import { loadFull } from "tsparticles";

export default {
  name: "Countdown",
  components: {
    Leaf,
  },
  setup() {
    const futureDate = new Date(2023, 10, 30); // Agosto 30, 2023. Recuerda que los meses empiezan desde 0 en JS, por lo tanto 7 es Agosto

    const days = ref(0);
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);

    const updateCountdown = () => {
      const now = new Date();
      const difference = futureDate - now;

      days.value = Math.floor(difference / (1000 * 60 * 60 * 24));
      hours.value = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      minutes.value = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      seconds.value = Math.floor((difference % (1000 * 60)) / 1000);
    };

    const particlesInit = async (engine) => {
      await loadFull(engine);
    };

    const particlesLoaded = async (container) => {
      console.log("Particles container loaded", container);
    };

    onMounted(() => {
      setInterval(updateCountdown, 1000);
    });

    return { days, hours, minutes, seconds, particlesInit, particlesLoaded };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");

h3 {
  font-family: "Montserrat", sans-serif;
}

h4 {
  font-family: "Quicksand", sans-serif;
}

.container-timer {
  position: fixed;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}

.counter {
  font-size: 2em;
  color: #fff;
  text-shadow: 2px 2px 4px #424141;
}

.icon {
  color: #fff;
}
</style>
