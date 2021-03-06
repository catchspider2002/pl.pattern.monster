const strings = {
  website: "https://pl.pattern.monster",
  title: "Pattern Monster",
  description: "Prosty generator szablonów online do tworzenia powtarzalnych wzorów SVG.",
  description2: "Przyspiesz swoją stronę bez uszczerbku na jakości obrazów.",
  description3: "Idealne jako tło strony internetowej, wzór na odzieży, marki, opakowań i innych.",
  keywords: "wzory svg, szablony, tła svg, tapeta wektorowa, generator wzorców, twórca wzorów",
  pages: [
    {
      page: "index",
      title: "SVG Pattern Generator",
      keywords: "",
      description: "",
      image: "",
    },
    {
      page: "changelog",
      title: "Dziennik zmian",
      keywords: "dziennik zmian",
      description: "Changelog for Pattern Monster.",
      image: "",
    },
    {
      page: "downloads",
      title: "Downloads",
      keywords: "downloads",
      description: "Downloads for Pattern Monster.",
      image: "",
    },
    {
      page: "features",
      title: "Funkcje",
      keywords: "funkcje",
      description: "Features for Pattern Monster.",
      image: "",
    },
    {
      page: "privacy-policy",
      title: "Polityka Prywatności",
      keywords: "polityka prywatności",
      description: "Privacy Policy for Pattern Monster.",
      image: "",
    },
    {
      page: "api",
      title: "API",
      keywords: "api",
      description: "API for Pattern Monster.",
      image: "",
    },
    {
      page: "accessories",
      title: "Accessories",
      keywords: "accessories, shop",
      description: "Accessories for Pattern Monster.",
      image: "",
    },
    {
      page: "home-living",
      title: "Home & Living",
      keywords: "home, living, shop",
      description: "Home Living for Pattern Monster.",
      image: "",
    },
    {
      page: "phone-cases",
      title: "Phone Cases",
      keywords: "phone, cases, shop",
      description: "Phone Cases for Pattern Monster.",
      image: "",
    },
    {
      page: "stationery-office",
      title: "Stationery & Office",
      keywords: "stationery, office, shop",
      description: "Stationery & Office for Pattern Monster.",
      image: "",
    },
    {
      page: "stickers-skins",
      title: "Stickers & Skins",
      keywords: "stickers, skins, shop",
      description: "Stickers & Skins for Pattern Monster.",
      image: "",
    },
    {
      page: "wall-art",
      title: "Wall Art",
      keywords: "wall-art, shop",
      description: "Wall Art for Pattern Monster.",
      image: "",
    },
  ],
  versions: [
    {
      lang: "en",
      website: "https://pattern.monster",
    },
    {
      lang: "de",
      website: "https://de.pattern.monster",
    },
    {
      lang: "pl",
      website: "https://pl.pattern.monster",
    },
    {
      lang: "tr",
      website: "https://tr.pattern.monster",
    },
    {
      lang: "es",
      website: "https://es.pattern.monster",
    },
    {
      lang: "it",
      website: "https://it.pattern.monster",
    },
    {
      lang: "ro",
      website: "https://ro.pattern.monster",
    },
    {
      lang: "fr",
      website: "https://fr.pattern.monster",
    },
    {
      lang: "ar",
      website: "https://ar.pattern.monster",
    },
    {
      lang: "pt",
      website: "https://pt.pattern.monster",
    },
    {
      lang: "zh-cn",
      website: "https://cn.pattern.monster",
    },
    {
      lang: "nl",
      website: "https://nl.pattern.monster",
    },
    {
      lang: "sv",
      website: "https://sv.pattern.monster",
    },
  ],
};

const pageDetails = (page) => {
  let imagePrefix = "https://giguom.com/pattern.monster/images/";
  let pageValues =
    strings.pages.filter((currentPage) => currentPage.page === page)[0] || strings.pages.filter((currentPage) => currentPage.page === "index")[0];

  let website = strings.website;
  let title = strings.title + " - " + strings.pages[0].title;
  let url = website;
  let keywords = strings.keywords;
  let desc = strings.description + " " + strings.description3;
  let image = pageValues.image == "" ? imagePrefix + "/TwitterBG2.png" : pageValues.image;

  let versions = strings.versions.map((version) => {
    return { lang: version.lang, website: version.website + (page === "index" ? "" : "/" + page + "/") };
  });

  if (page != "index") {
    title = pageValues.title + " - " + strings.title + " | " + strings.pages[0].title;
    url = website + "/" + page + "/";
    desc = pageValues.description + " " + strings.description + " " + strings.description3;
    keywords = pageValues.keywords + ", " + strings.keywords;
  }

  return { title, url, keywords, desc, image, versions };
};

let bmcData = `<path d="M0 24.48C0 10.96 8.88 0 19.83 0H472.2c10.95 0 19.83 10.96 19.83 24.48v104.04c0 13.52-8.88 24.48-19.83 24.48H19.83C8.88 153 0 142.04 0 128.52z" fill="#ffc800"/>
<path d="M109.52 50.32l-.06-.04-.16-.05c.06.05.14.08.22.09zM110.5 57.31l-.07.02zM109.55 50.3h-.03v.02l.03-.01zM109.52 50.32h.02zM110.45 57.3l.11-.06.04-.03.04-.04a.65.65 0 00-.2.13zM109.72 50.47l-.12-.1-.07-.04c.04.07.1.12.18.14zM81.88 118.35a.57.57 0 00-.23.18l.07-.05.16-.13zM98.05 115.17c0-.1-.05-.08-.04.28l.02-.09c0-.06 0-.12.02-.19zM96.38 118.35a.57.57 0 00-.23.18l.07-.05.16-.13zM70.49 119.11a.48.48 0 00-.24-.11l.2.1zM67.93 116.66a2.38 2.38 0 010 0z" fill="#0d0c22"/>
<path d="M85.14 72.77C81.62 74.27 77.63 76 72.45 76a24 24 0 01-6.4-.89l3.58 36.74a6.14 6.14 0 006.12 5.63s5.07.26 6.76.26c1.83 0 7.29-.26 7.29-.26a6.14 6.14 0 006.12-5.63l3.83-40.6a16.3 16.3 0 00-5.4-.97c-3.36 0-6.08 1.16-9.21 2.5z" fill="#fff"/>
<path d="M54.98 57.1l.07.06.03.02a.6.6 0 00-.1-.08z" fill="#0d0c22"/>
<path d="M116.3 53.71l-.54-2.72c-.48-2.43-1.58-4.74-4.08-5.62-.8-.28-1.72-.4-2.33-.99-.62-.58-.8-1.49-.94-2.33l-.78-4.62c-.23-1.33-.42-2.81-1.03-4.03-.79-1.63-2.43-2.58-4.06-3.21-.83-.32-1.69-.58-2.55-.8-4.08-1.07-8.36-1.46-12.55-1.69-5.03-.28-10.08-.2-15.1.25-3.73.34-7.67.75-11.22 2.04a9.5 9.5 0 00-3.62 2.05 3.92 3.92 0 00-.72 4.67 6.05 6.05 0 002.82 2.37c1.47.66 3 1.16 4.58 1.5 4.39.96 8.93 1.34 13.41 1.5 4.97.2 9.95.04 14.89-.48 1.22-.14 2.44-.3 3.66-.49 1.44-.22 2.36-2.1 1.93-3.4-.5-1.56-1.86-2.17-3.4-1.93l-.68.1-.16.02a95.5 95.5 0 01-4.8.47 107.24 107.24 0 01-19.14-.4l-.47-.07-.1-.01-.48-.07a50.9 50.9 0 01-2.96-.53.44.44 0 010-.87h.02a47.95 47.95 0 013.42-.6c.54-.03 1.08-.13 1.61-.2a102.3 102.3 0 0122.2.1l.56.08.38.05c1.09.16 2.17.36 3.25.6 1.6.34 3.66.45 4.37 2.2.22.56.33 1.18.45 1.76l.16.75.01.04 1.13 5.27a.95.95 0 01-.15.75.97.97 0 01-.66.4h-.01l-.23.04-.23.03a128.48 128.48 0 01-6.45.68 149.64 149.64 0 01-12.9.52 151.25 151.25 0 01-19.17-1.24l-.51-.07-1.19-.17c-1.33-.2-2.65-.45-3.97-.66a6.9 6.9 0 00-4.58.66 6.66 6.66 0 00-2.76 2.86c-.62 1.29-.8 2.7-1.08 4.08-.28 1.39-.72 2.88-.55 4.3a6.87 6.87 0 005.59 6.13 161.9 161.9 0 0046.27 1.53 1.98 1.98 0 012.19 2.17l-.3 2.85a1089465.02 1089465.02 0 01-4.15 40.42c-.17 1.67-.19 3.4-.5 5.04-.5 2.6-2.27 4.2-4.83 4.78-2.35.53-4.76.82-7.17.84-2.67.01-5.34-.1-8.01-.1-2.86.02-6.35-.24-8.55-2.36-1.94-1.87-2.2-4.79-2.47-7.31l-1.04-10.03-1.94-18.59L62.84 70l-.07-.6c-.15-1.43-1.16-2.84-2.76-2.77-1.37.06-2.93 1.23-2.77 2.77l.93 8.92 1.92 18.44 1.64 15.72.31 3.01c.6 5.49 4.8 8.44 9.98 9.27 3.03.5 6.14.6 9.21.64 3.94.06 7.92.22 11.8-.5 5.74-1.05 10.05-4.89 10.67-10.84l.53-5.15 1.75-17.05 1.9-18.58.87-8.51a1.98 1.98 0 011.6-1.74c1.64-.32 3.2-.87 4.38-2.12 1.86-1.99 2.23-4.58 1.57-7.2zm-61.8 1.84c.03-.01-.02.2-.04.3 0-.15 0-.28.05-.3zm.16 1.23c.02 0 .06.04.1.1l-.1-.1zm.16.2c.06.1.09.16 0 0zm.32.26l.02.03a.21.21 0 00-.03-.03zm55.13-.38c-.6.56-1.48.82-2.36.95A166.3 166.3 0 0178.1 59.7a200.69 200.69 0 01-21.24-2.03c-.7-.1-1.44-.23-1.92-.74-.9-.96-.46-2.9-.22-4.06.21-1.06.62-2.48 1.89-2.63 1.97-.23 4.27.6 6.22.9a136.85 136.85 0 0037.57.3c1.84-.26 3.67-.54 5.5-.87 1.62-.3 3.42-.84 4.4.84.67 1.15.76 2.68.66 3.98-.04.56-.28 1.1-.7 1.48z" fill="#0d0c22"/>
<g aria-label="Kup mi kawę" transform="matrix(9.22544 0 0 9.22544 1026.53 -199.71)" fill="#000" stroke="#000" stroke-width=".11">
  <path d="M-90.35 32.38l.31-.04q.08 0 .08.07-.02.14-.26.3-.23.16-.54.16-.33 0-.7-.75-.31-.63-.64-1.47-.23.13-.48.17-.34 1.61-1.71 1.61-.36 0-.66-.17-.3-.16-.3-.51 0-.22.11-.35.11-.14.3-.14t.19.08q0 .04-.05.16-.05.11-.05.23 0 .11.14.25.13.13.4.13t.47-.12q.2-.13.32-.37.11-.24.19-.48.08-.25.1-.61.06-.53.06-1.21 0-.68.02-1.1-1.02.18-1.02.88 0 .2-.08.3-.08.12-.21.12-.24 0-.24-.27 0-.48.43-.8.43-.34 1.14-.5.06-.31.28-.52.23-.2.4-.2.19 0 .3.1.1.1.1.26 0 .39-.54.54l.03 1.47q0 .47-.05.86.4-.12.8-.72.38-.6.66-1.52.21-.71.72-.71.22 0 .22.26t-.32.47q-.12.08-.14.11-.62 1.42-1.13 1.97.5 1.02.8 1.54.33.51.55.51zm-1.92-4.89q-.17 0-.21.36.29-.09.29-.23 0-.13-.08-.13z"/>
  <path d="M-90.07 31.42l.05-.89q0-.85.08-.93l.28-.23q.2-.15.3-.15.09 0 .11.03.02.03.02.12 0 .35-.15.7-.12.73-.12 1.2 0 .46.16.46.18 0 .42-.32.25-.31.5-.94.07-.8.1-.86l.23-.23q.17-.16.29-.16.11 0 .11.3 0 .08-.04.3-.04.24-.1.34-.09.22-.09 1.37 0 .22.05.22.14-.01.37-.34.24-.33.47-.84.24-.52.29-.52.05 0 .05.06 0 .23-.23.7-.62 1.34-1.05 1.34-.31 0-.47-.12-.06-.06-.06-.35 0-.28.03-.63-.26.54-.5.82-.26.28-.58.28-.31 0-.41-.16-.1-.17-.1-.57z"/>
  <path d="M-86.92 29.64q.08-.1.27-.26.2-.16.3-.16.12 0 .12.31t-.17.61q-.03.15-.05.42.23-.63.46-.95.23-.31.56-.31.33 0 .58.3.24.3.24.93 0 .64-.36 1.13-.36.5-.95.5-.3 0-.6-.23 0 1.52-.18 2.31-.02.07-.22.24-.19.17-.27.17-.1 0-.14-.12-.04-.13-.04-.24 0-.82.34-2.1.05-.75.07-1.64.02-.89.04-.9zm1.05 2.23q.23 0 .48-.32.24-.33.24-.8 0-.47-.13-.75t-.35-.28q-.38 0-.86 1.58l-.02.34q.22.23.64.23zM-82.07 31.68v.25q0 .22-.12.22-.2 0-.37-.04-.17-.06-.17-.15l.04-.62q.04-.54.04-.81v-.47q0-.38.08-.46.08-.08.28-.23.2-.15.3-.15.1 0 .11.03.03.03.03.12 0 .42-.16.79-.04.45-.04.63.42-.79.59-1.03.3-.46.53-.46.15 0 .28.11.13.12.13.3v.33l-.01.24-.01.11q.03-.06.27-.36l.32-.38.18-.17q.18-.18.32-.18.15 0 .28.1.14.12.14.28 0 .35-.08 1.04-.07.67-.07.85 0 .18.04.18.14-.01.38-.34.23-.33.46-.84.24-.52.29-.52.06 0 .06.06 0 .23-.23.7-.63 1.34-1.06 1.34-.27 0-.43-.12-.05-.06-.05-.29 0-.24.04-.76.04-.53.04-.8 0-.26-.08-.26-.1 0-.46.35-.34.35-.36.5-.05.26-.05 1.16 0 .22-.12.22-.18 0-.35-.04-.16-.06-.16-.15l.05-.78q.05-.7.05-.97 0-.29-.1-.29-.08 0-.43.55-.35.54-.4.75-.02.22-.02.46z"/>
  <path d="M-78.14 28.23q0-.14.15-.24.15-.1.27-.1.22 0 .22.24t-.13.43q-.13.17-.36.17-.15 0-.15-.5zm.23 3.92q-.3 0-.46-.12-.06-.06-.06-.4t.05-1.14q.05-.8.1-.86.03-.06.24-.24.2-.17.32-.17t.12.3q0 .08-.05.3-.04.24-.1.34-.1.26-.1 1.37 0 .22.05.22.13-.01.37-.34t.47-.84q.24-.52.28-.52.06 0 .06.06 0 .23-.23.7-.63 1.34-1.06 1.34zM-72.9 32.4l.2-.03q.07 0 .07.06 0 .11-.15.17-.15.05-.34.05-.36 0-.6-.28-.24-.29-.67-1.06-.1-.17-.1-.25 0-.12.33-.28.54-.28.54-.7 0-.12-.09-.2-.08-.08-.21-.08-.2 0-.45.45-.27.44-.36.84-.09.39-.09.84 0 .22-.13.22-.18 0-.35-.04-.16-.06-.16-.14l.06-.75q.07-.68.07-.97.03-1.62.2-2.48.02-.07.2-.24.2-.18.33-.18.11 0 .1.3 0 .3-.12 1.27-.13.98-.16 1.79.14-.51.45-.96.32-.45.64-.45.54 0 .54.52 0 .35-.2.63-.21.28-.56.46-.08.03-.08.07 0 .04.03.08.5.88.85 1.24.1.1.2.1zM-70.5 32.15q-.32 0-.48-.12-.05-.06-.05-.28l.01-.61q-.2.51-.41.77-.2.24-.52.24-.31 0-.55-.3-.24-.3-.24-.93 0-.64.36-1.13.36-.5.95-.5.25 0 .57.34.07-.09.22-.2.17-.13.28-.13.12 0 .12.3 0 .08-.05.3-.04.24-.1.34-.06.18-.06 1.3 0 .2.04.2.14 0 .38-.33t.47-.84q.23-.52.28-.52.06 0 .06.06 0 .23-.23.7-.63 1.34-1.06 1.34zm-.98-2.54q-.22 0-.47.34-.25.32-.25.77 0 .44.13.73.13.28.35.28.26 0 .77-1.3l.01-.22.03-.24q-.08-.13-.26-.24-.17-.12-.3-.12z"/>
  <path d="M-66.4 30.47q.34 0 .62-.29.14-.14.2-.14.05 0 .05.08t-.1.2q-.43.46-1.06.46-.13.59-.4.98-.27.4-.68.4-.41 0-.6-.5-.32.5-.67.5-.66 0-.66-1.28 0-.88.18-1.2.03-.05.23-.18.21-.13.29-.13.12 0 .12.15-.02.37-.22.88-.05.1-.05.46t.08.63q.09.27.24.27.16 0 .4-.38-.05-.2-.05-.42 0-.23.05-.48.05-.26.2-.53.13-.26.33-.26.07 0 .09.04.03.04.03.2 0 .4-.21 1 .03.35.16.6.13.23.29.23.23 0 .39-.29.16-.3.24-.73-.29-.08-.45-.3-.16-.22-.16-.51 0-.3.14-.5.14-.21.41-.21.37 0 .37.78 0 .2-.03.43.12.04.23.04zm-.62-.95q-.08 0-.08.27t.25.5v-.12q0-.65-.17-.65z"/>
  <path d="M-63.26 30.11q0 .26-.3.84-.28.58-.73.96-.45.4-.45.91 0 .12.07.2.07.09.17.09t.2-.12q.1-.1.13-.1.05 0 .05.14 0 .13-.19.29-.19.17-.38.17-.2 0-.33-.12t-.13-.33q0-.44.39-.92-.12.03-.28.03-.44 0-.7-.33-.27-.34-.27-.77 0-.87.37-1.31.36-.44.94-.44.27 0 .45.15.17.14.17.4 0 .47-.4.8-.4.31-.98.33.03.3.2.54.19.22.43.22.23 0 .43-.11.19-.11.34-.32.34-.44.58-1l.1-.2q.03-.06.07-.06.05 0 .05.06zm-1.94.6q.64-.2.64-.84-.03-.32-.23-.32-.27 0-.46.39-.2.38-.21.85l.26-.07z"/>
</g>`;
let bmcHeader = `<svg xmlns="http://www.w3.org/2000/svg" height="2.5rem" viewBox="0 0 492.35 153" fill="none">${bmcData}</svg>`;
let bmcFooter = `<svg xmlns="http://www.w3.org/2000/svg" height="4rem" viewBox="0 0 492.35 153" fill="none">${bmcData}</svg>`;

export default { bmcHeader, bmcFooter, strings, pageDetails };