<script lang="ts" setup>
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/vue/24/outline'
const runtimeConfig = useRuntimeConfig()
import type { Strapi4Response } from "@nuxtjs/strapi"
const { find } = useStrapi4()
const nuxtApp = useNuxtApp()

const content = await find<Strapi4Response<Accueil>>("accueil", { populate: 'deep' });

const home = content.data.attributes

const accueil = {
  bloc5ImagesColonne1: [
    {
      image: {
        src: '/cabine.jpg',
        alt: 'coucou',
      },
      height: '434'
    },
    {
      image: {
        src: '/cabine.jpg',
        alt: 'coucou',
      },
      height: '246'
    },
    {
      image: {
        src: '/cabine.jpg',
        alt: 'coucou',
      },
      height: '191'
    }
  ],
  bloc5ImagesColonne2: [
    {
      image: {
        src: '/cabine.jpg',
        alt: 'coucou',
      },
      height: '246'
    },
    {
      image: {
        src: '/cabine.jpg',
        alt: 'coucou',
      },
      height: '340'
    },
    {
      image: {
        src: '/cabine.jpg',
        alt: 'coucou',
      },
      height: '285'
    }
  ],
  bloc5ImagesColonne3: [
    {
      image: {
        src: '/cabine.jpg',
        alt: 'coucou',
      },
      height: '343'
    },
    {
      image: {
        src: '/cabine.jpg',
        alt: 'coucou',
      },
      height: '185'
    },
    {
      image: {
        src: '/cabine.jpg',
        alt: 'coucou',
      },
      height: '343'
    }
  ],
  bloc5ImagesColonne4: [
    {
      image: {
        src: '/cabine.jpg',
        alt: 'coucou',
      },
      height: '186'
    },
    {
      image: {
        src: '/cabine.jpg',
        alt: 'coucou',
      },
      height: '434'
    },
    {
      image: {
        src: '/cabine.jpg',
        alt: 'coucou',
      },
      height: '251'
    }
  ],
  bloc7bloc1Texte1: "850 Chemin du Plan d'Aillane<br />13290 Les Milles",
  bloc7bloc1Texte2: "Tél. : 04 42 39 79 66<br />Tél. : 09 75 54 41 71",
  bloc7bloc1Texte3: "Ecrivez-nous !",
  bloc7bloc2Texte1: "Du lundi au jeudi :<br />08:00 – 12:00  |  14:00 – 18:30",
  bloc7bloc2Texte2: "Le vendredi :<br />08:00 – 12:00  |  14:00 – 17:00",
  bloc7bloc2Texte3: "Fermé le weekend",
}

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')
const subject = ref('')
const message = ref('')
let error = ref(false)
let messageDisplay = ref('')

async function addContact () {
  checkForm()
  if (!error.value) {
    await $fetch(runtimeConfig.public.apiBase + '/api/contacts', {
        method: 'POST',
        body: {
          data: {
            prenom: firstName.value,
            nom: lastName.value,
            email: email.value,
            telephone: phone.value,
            objet: subject.value,
            message: message.value
          }
        }
    })
    messageDisplay.value = 'Votre message a bien été envoyé !'
  }
}

function checkForm () {
  messageDisplay.value = ''
  error.value = false
  
  if (firstName.value.length === 0 || lastName.value.length === 0 || email.value.length === 0 || message.value.length === 0 || !validEmail(email.value)) {
    error.value = true
    messageDisplay.value = 'Il y a une erreur dans le formulaire.'
  }

}

function validEmail (email: string) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

function scrollToForm () {
  const contactDiv = document.getElementById("contact-us")
  contactDiv ? contactDiv.scrollIntoView({behavior: "smooth"}) : null;
}
</script>

<template>
  <div>
    <div class="px-8 h-screen relative flex justify-center items-center">
      <div class="absolute w-full h-full inset-0 z-0">
        <nuxt-img
          :src="(runtimeConfig.public.apiBase + home.imageHeader.data.attributes.url)"
          :alt="home.imageHeader.data.attributes.alternativeText"
          class="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div class="max-w-screen-xl w-full mx-auto flex flex-col relative z-10">
        <h1 class="font-heebo text-white text-[5rem] leading-[6rem] font-bold mb-8">
          {{ home.headerTitre }}
        </h1>
        <h2 class="text-science-blue text-[2rem] leading-[2.4rem] tracking-wide font-medium lg:w-2/5">
          {{ home.headerSousTitre }}
        </h2>
        <div class="mt-20">
          <span
            class="inline-block border-2 border-solid border-science-blue rounded-[3.2rem] py-8 px-12 font-heebo font-medium text-white uppercase text-[1.6rem] leading-8 tracking-wider cursor-pointer transition-colors hover:bg-science-bluej'"
            @click="scrollToForm()"
          >
            {{ home.headerLien }}
          </span>
        </div>
      </div>
    </div>

    <div class="pt-36 pb-40 px-8 max-w-screen-xl mx-auto flex max-lg:flex-col gap-40">
      <div class="flex-1 pt-10 lg:pb-48">
        <h2 class="text-science-blue font-heebo font-bold text-[4rem] leading-[4.8rem]">
          {{ home.bloc1Titre }}
        </h2>
        <h3 class="font-heebo font-medium text-[2rem] leading-[2.4rem] tracking-wide text-downriver mt-4">
          {{ home.bloc1SousTitre }}
        </h3>
        <p class="font-heebo text-downriver text-[1.6rem] leading-[2.2rem] tracking-wider mt-6">
          {{ home.bloc1Texte }}
        </p>

        <div class="relative max-w-2xl mt-24 pt-8">
          <img
            src="~/assets/img/quote.svg"
            alt="Quote"
            class="absolute top-0 left-0 z-0 max-w-[15.5rem] h-auto w-full"
          />
          <p class="relative z-10 font-heebo font-medium text-downriver text-5xl leading-[3.6rem] tracking-wide lg:mb-10">
            {{ home.bloc1Citation }}
          </p>
          <img
            src="/signature-ollivier.png"
            alt="Signature Ollivier Conforti"
            class="max-w-[12.5rem] h-auto w-full"
          />
        </div>
      </div>

      <div class="flex-1 flex gap-12">
        <div class="flex-1 flex flex-col gap-12">
          <div class="w-full h-[28.5rem]">
            <nuxt-img
              :src="(runtimeConfig.public.apiBase + home.bloc1Images.data[0].attributes.url)"
              :alt="home.bloc1Images.data[0].attributes.alternativeText"
              class="w-full h-full object-cover"
              loading="lazy"
              format="webp"
              provider="strapi"
            />
          </div>
          <div class="w-full h-[19rem]">
            <nuxt-img
              :src="(runtimeConfig.public.apiBase + home.bloc1Images.data[1].attributes.url)"
              :alt="home.bloc1Images.data[1].attributes.alternativeText"
              class="w-full h-full object-cover"
              loading="lazy"
              format="webp"
              provider="strapi"
            />
          </div>
        </div>
        <div class="flex-1 flex flex-col gap-12">
          <div class="w-full h-[19rem] mt-20">
            <nuxt-img
              :src="(runtimeConfig.public.apiBase + home.bloc1Images.data[2].attributes.url)"
              :alt="home.bloc1Images.data[2].attributes.alternativeText"
              class="w-full h-full object-cover"
              loading="lazy"
              format="webp"
              provider="strapi"
            />
          </div>
          <div class="w-full h-[34em]">
            <nuxt-img
              :src="(runtimeConfig.public.apiBase + home.bloc1Images.data[3].attributes.url)"
              :alt="home.bloc1Images.data[3].attributes.alternativeText"
              class="w-full h-full object-cover"
              loading="lazy"
              format="webp"
              provider="strapi"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="bg-aqua-haze py-40 px-8">
      <div class="max-w-screen-xl mx-auto">
        <h2 class="text-center text-science-blue font-heebo font-bold text-[4rem] leading-[4.8rem]">
          {{ home.bloc2Titre }}
        </h2>
        <p class="text-center text-downriver font-heebo font-medium text-[1.6rem] leading-[2.2rem] mt-4 mb-20 tracking-wider">
          {{ home.bloc2Introduction }}
        </p>
        <div class="flex max-lg:flex-col justify-between gap-14">
          <div
            v-for="(prestation, i) in home.bloc2Prestations"
            :key="i"
            class="flex-1"
          >
            <nuxt-img
              :src="(runtimeConfig.public.apiBase + prestation.image.data.attributes.url)"
              :alt="prestation.image.data.attributes.alternativeText"
              class="w-auto h-32 mx-auto"
              provider="strapi"
            />
            <h3 class="mt-6 font-heebo font-medium text-[2rem] leading-[2.4rem] text-downriver tracking-wider text-center relative after:absolute after:content-[''] after:h-[.2rem] after:w-28 after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 pb-6 mb-6 w-full after:bg-science-blue">
              {{ prestation.titre }}
            </h3>
            <p class="text-lynch font-heebo text-[1.6rem] leading-[2.2rem] tracking-wider text-center">
              {{ prestation.texte }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="relative before:absolute before:w-full before:h-3 before:content-[''] before:top-0 before:left-0 before:bg-turbo after:absolute after:w-full after:h-3 after:content-[''] after:top-3 after:left-0 after:bg-cerise flex justify-center items-center lg:h-[32.5rem] max-lg:pt-28 max-lg:pb-20  px-8">
      <div class="w-full h-full absolute inset-0 top-6 z-0">
        <nuxt-img
          src="/bg-bleu.jpg"
          alt="background bleu"
          class="w-full h-full object-cover"
          loading="lazy"
          format="webp"
        />
      </div>
      <div class="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          src="~/assets/img/quote-grise.svg"
          alt="Quote"
          class="max-w-[15.5rem] h-auto w-full mb-8 mx-auto"
        />
        <nuxt-img
          src="/signature-ollivier-bleu.png"
          alt="Signature Ollivier Conforti"
          class="max-w-[12.5rem] h-auto w-full mx-auto"
          loading="lazy"
          format="webp"
        />
      </div>
      <p class="max-w-[95rem] font-heebo font-medium text-white text-5xl leading-[3.6rem] tracking-wide relative z-20 text-center">
        {{ home.bloc3Citation }}
      </p>
    </div>

    <div class="bg-aqua-haze py-40 px-8">
      <div class="max-w-screen-xl mx-auto">
        <h2 class="text-center text-science-blue font-heebo font-bold text-[4rem] leading-[4.8rem]">
          {{ home.bloc4Titre }}
        </h2>
        <p class="text-center text-downriver font-heebo font-medium text-[1.6rem] leading-[2.2rem] mt-4 mb-20 tracking-wider">
          {{ home.bloc4Introduction }}
        </p>
        <div class="flex max-lg:flex-col justify-between gap-14">
          <div
            v-for="(materiel, i) in home.bloc4Materiels"
            :key="i"
            class="flex-1"
          >
            <div class="w-full h-80 lg:h-[45rem]">
              <nuxt-img
                :src="(runtimeConfig.public.apiBase + materiel.image.data.attributes.url)"
                :alt="materiel.image.data.attributes.alternativeText"
                class="w-full h-full object-cover"
                loading="lazy"
                format="webp"
                provider="strapi"
              />
            </div>
            <h3 class="mt-6 font-heebo font-medium text-[2rem] leading-[2.4rem] text-downriver tracking-wider text-center relative after:absolute after:content-[''] after:h-[.2rem] after:w-28 after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 px-4 pb-6 mb-6 w-full after:bg-science-blue">
              {{ materiel.titre }}
            </h3>
            <p
              class="text-lynch font-heebo text-[1.6rem] leading-[2.2rem] tracking-wider text-center px-4"
              v-if="materiel.texte"
            >
              {{ materiel.texte }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="py-40 px-8 max-w-screen-xl mx-auto">
      <h2 class="text-center text-science-blue font-heebo font-bold text-[4rem] leading-[4.8rem]">
        {{ home.bloc5Titre }}
      </h2>
      <p class="text-center text-downriver font-heebo font-medium text-[1.6rem] leading-[2.2rem] mt-4 mb-20 tracking-wider">
        {{ home.bloc5Introduction }}
      </p>
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-14 justify-between">
        <div class="flex flex-col gap-14">
          <div
            v-for="(img, i) in accueil.bloc5ImagesColonne1"
            :key="i"
            :style="'height: ' + img.height + 'px;'"
            class="max-lg:!h-auto"
          >
            <img
              :src="img.image.src"
              :alt="img.image.alt"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        <div class="flex flex-col gap-14">
          <div
            v-for="(img, i) in accueil.bloc5ImagesColonne2"
            :key="i"
            :style="'height: ' + img.height + 'px;'"
            class="max-lg:!h-auto"
          >
            <img
              :src="img.image.src"
              :alt="img.image.alt"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        <div class="flex flex-col gap-14">
          <div
            v-for="(img, i) in accueil.bloc5ImagesColonne3"
            :key="i"
            :style="'height: ' + img.height + 'px;'"
            class="max-lg:!h-auto"
          >
            <img
              :src="img.image.src"
              :alt="img.image.alt"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        <div class="flex flex-col gap-14">
          <div
            v-for="(img, i) in accueil.bloc5ImagesColonne4"
            :key="i"
            :style="'height: ' + img.height + 'px;'"
            class="max-lg:!h-auto"
          >
            <img
              :src="img.image.src"
              :alt="img.image.alt"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="bg-aqua-haze py-40 px-8">
      <div class="max-w-screen-xl mx-auto">
        <h2 class="text-center text-science-blue font-heebo font-bold text-[4rem] leading-[4.8rem]">
          {{ home.bloc6Titre }}
        </h2>
        <p class="text-center text-downriver font-heebo font-medium text-[1.6rem] leading-[2.2rem] mt-4 mb-20 tracking-wider">
          {{ home.bloc6Introduction }}
        </p>
        <div class="flex max-lg:flex-col justify-center gap-16 lg:gap-20 items-center">
          <div
            v-for="(partenaire, i) in home.bloc6Partenaires.data"
            :key="i"
            class="flex-1"
          >
            <nuxt-img
              :src="(runtimeConfig.public.apiBase + partenaire.attributes.url)"
              :alt="partenaire.attributes.alternativeText"
              class="w-auto mx-auto filter grayscale max-lg:max-w-[20rem] max-h-24"
              provider="strapi"
              loading="lazy"
              format="webp"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="px-8 max-w-screen-xl mx-auto flex max-lg:flex-col items-end gap-40 py-40">
      <div class="flex-1">
        <h2 class="text-science-blue font-heebo font-bold text-[4rem] leading-[4.8rem]">
          {{ home.bloc7Titre }}
        </h2>
        <p class="text-downriver font-heebo font-medium text-[1.6rem] leading-[2.2rem] mt-4 mb-20 tracking-wider">
          {{ home.bloc7Introduction }}
        </p>
        <form
          class="flex gap-10 flex-col relative"
          @submit.prevent="addContact()"
          id="contact-us"
        >
          <div class="flex gap-10 justify-between">
            <input
              type="text"
              class="flex-1 border-2 border-solid border-botticelli p-5 text-lynch font-heebo text-[1.6rem] leading-[2.2rem] tracking-wider"
              placeholder="Prénom *"
              v-model="firstName"
            />
            <input
              type="text"
              class="flex-1 border-2 border-solid border-botticelli p-5 text-lynch font-heebo text-[1.6rem] leading-[2.2rem] tracking-wider"
              placeholder="Nom *"
              v-model="lastName"
            />
          </div>
          <div class="flex gap-10 justify-between">
            <input
              type="email"
              class="flex-1 border-2 border-solid border-botticelli p-5 text-lynch font-heebo text-[1.6rem] leading-[2.2rem] tracking-wider"
              placeholder="Email *"
              v-model="email"
            />
            <input
              type="text"
              class="flex-1 border-2 border-solid border-botticelli p-5 text-lynch font-heebo text-[1.6rem] leading-[2.2rem] tracking-wider"
              placeholder="Téléphone"
              v-model="phone"
            />
          </div>
          <input
            type="text"
            class="w-full border-2 border-solid border-botticelli p-5 text-lynch font-heebo text-[1.6rem] leading-[2.2rem] tracking-wider"
            placeholder="Sujet"
            v-model="subject"
          />
          <textarea
            v-model="message"
            class="w-full border-2 border-solid border-botticelli p-5 text-lynch font-heebo text-[1.6rem] leading-[2.2rem] tracking-wider min-h-[20rem]"
            placeholder="Message *"
          />
          <div class="flex justify-end">
            <input
              type="submit"
              class="inline-block border-2 border-solid border-science-blue rounded-[3.2rem] py-5 px-20 font-heebo font-medium text-downriver text-[1.6rem] leading-8 tracking-wider cursor-pointer transition-colors hover:bg-science-blue hover:text-white"
              value="Envoyer !"
            />
          </div>
          <p
            class="absolute top-full right-0  px-6 py-5 mt-8 font-heebo font-medium text-[1.6rem] leading-[2.2rem] tracking-wide"
            :class="!error ? 'bg-mint-green text-japanese-laurel' : 'text-scarlet bg-mona-lisa'"
            v-if="messageDisplay.length > 0"
          >
            {{ messageDisplay }}
          </p>
        </form>
      </div>
      <div class="flex-1">
        <div class="flex max-lg:flex-col gap-10 mb-24">
          <div class="flex-1">
            <h3 class="font-heebo font-medium text-[2rem] leading-[2.4rem] tracking-wide text-downriver relative after:absolute after:content-[''] after:h-[.2rem] after:w-28 after:bottom-0 after:left-0 after:transform pb-6 mb-6 after:bg-science-blue">
              {{ home.bloc7bloc1Titre }}
            </h3>
            <div class="flex gap-5 items-start mb-8">
              <MapPinIcon class="h-auto w-8 text-science-blue relative top-1" />
              <div
                v-html="nuxtApp.$mdit.render(home.bloc7bloc1Texte1)"
                class="flex-1 font-heebo text-[1.6rem] leading-[2.2rem] tracking-wide text-lynch"
              />
            </div>
            <div class="flex gap-5 items-start mb-8">
              <PhoneIcon class="h-auto w-8 text-science-blue relative top-1" />
              <div
                v-html="nuxtApp.$mdit.render(home.bloc7bloc1Texte2)"
                class="flex-1 font-heebo text-[1.6rem] leading-[2.2rem] tracking-wide text-lynch"
              />
            </div>
            <div class="flex gap-5 items-start">
              <EnvelopeIcon class="h-auto w-8 text-science-blue" />
              <div
                v-html="nuxtApp.$mdit.render(home.bloc7bloc1Texte3)"
                class="flex-1 font-heebo text-[1.6rem] leading-[2.2rem] tracking-wide text-lynch"
              />
            </div>
          </div>
          <div class="flex-1 max-lg:w-full">
            <h3 class="font-heebo font-medium text-[2rem] leading-[2.4rem] tracking-wide text-downriver relative after:absolute after:content-[''] after:h-[.2rem] after:w-28 after:bottom-0 after:left-0 after:transform pb-6 mb-6 after:bg-science-blue">
              {{ home.bloc7bloc2Titre }}
            </h3>
            <div class="flex gap-5 items-start mb-8">
              <ClockIcon class="h-auto w-8 text-science-blue relative top-1" />
              <div
                v-html="nuxtApp.$mdit.render(home.bloc7bloc2Texte1)"
                class="flex-1 font-heebo text-[1.6rem] leading-[2.2rem] tracking-wide text-lynch"
              />
            </div>
            <div class="flex gap-5 items-start mb-8">
              <ClockIcon class="h-auto w-8 text-science-blue relative top-1" />
              <div
                v-html="nuxtApp.$mdit.render(home.bloc7bloc2Texte2)"
                class="flex-1 font-heebo text-[1.6rem] leading-[2.2rem] tracking-wide text-lynch"
              />
            </div>
            <div class="flex gap-5 items-start">
              <ClockIcon class="h-auto w-8 text-science-blue" />
              <div
                v-html="nuxtApp.$mdit.render(home.bloc7bloc2Texte3)"
                class="flex-1 font-heebo text-[1.6rem] leading-[2.2rem] tracking-wide text-lynch"
              />
            </div>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.385025440298!2d5.369806715961093!3d43.494302879127154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c98d08502c1c1d%3A0x802e50dd703227a0!2sCarrosserie%20Ollivier!5e0!3m2!1sfr!2sfr!4v1669662017956!5m2!1sfr!2sfr" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full h-96"></iframe>
      </div>
    </div>
  </div>
</template>