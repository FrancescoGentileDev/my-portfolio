<template>
  <div id="contact" class="container mx-auto">
    <title-component
      subTitle="Here you can contact me, submitting the form or with the socials below"
      title="Contact"
    />
    <div class=" rounded-lg  max-w-3xl block mx-auto mb-14">
      <form action="https://public.herotofu.com/v1/9667d6e0-6db1-11ed-a377-655c67143cec" method="post" target="_blank">
        <div class="form-group mb-6 mt-6" data-aos='flip-left'  data-aos-once='true' >
          <input
            type="text"
            class="form-control block w-full px-3 py-3 text-xl font-normal text-tertiary bg-backgroundSecondary bg-clip-padding border border-solid border-grey rounded transition ease-in-out m-0 focus:text-tertiary focus:bg-backgroundSecondary focus:border-secondary focus:outline-none"
            id="name"
            name="name"
            required
            placeholder="Name"
          />
        </div>
        <div class="form-group mb-6"  data-aos='flip-right' data-aos-delay='200'  data-aos-once='true' >
          <input
            type="email"
            class="form-control block w-full px-3 py-3 text-xl font-normal text-tertiary bg-backgroundSecondary bg-clip-padding border border-solid border-grey rounded transition ease-in-out m-0 focus:text-tertiary focus:bg-backgroundSecondary focus:border-secondary focus:outline-none"
            id="email"
            name="email"
            required
            placeholder="Email address"
          />
        </div>
        <div class="form-group mb-6"  data-aos='flip-left' data-aos-delay='300'  data-aos-once='true' >
          <textarea
            class="form-control block w-full px-3 py-3 text-xl font-normal text-tertiary bg-backgroundSecondary bg-clip-padding border border-solid border-grey rounded transition ease-in-out m-0 focus:text-tertiary focus:bg-backgroundSecondary focus:border-secondary focus:outline-none"
            id="message"
            name="message"
            rows="3"
            required
            placeholder="Message"
          ></textarea>
        </div>
        <button data-aos='flip-right' data-aos-delay='400' data-aos-once='true' 
          type="submit"
          class="w-full px-6 py-2.5 bg-marrone1 text-background font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          value="Download CTA"
        >
          Send
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import titleComponent from "../components/titleComponent.vue";
export default {
  components: { titleComponent },
};
</script>

<style></style>
