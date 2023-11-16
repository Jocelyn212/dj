export default {
  async mounted() {
    const swiper = new Swiper(".swiper-container", {
      // Optional parameters
      direction: "horizontal",
      loop: true,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
  render() {
    return (
      <Layout>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            {images.map((image) => (
              <div class="swiper-slide">
                <img src={image} />
              </div>
            ))}
          </div>

          <div class="swiper-pagination"></div>

          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </Layout>
    );
  },
};
