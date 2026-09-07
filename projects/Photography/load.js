import datt from "../../js/datt.js";

const data = {
  photos: [
    {
      link: './projects/Photography/photos/IMG_7005.jpg',
      description: 'Nizhny Novgorod. View from Alexandrovsky Garden.'
    },
    {
      link: './projects/Photography/photos/IMG_7025.jpg',
      description: 'Nizhny Novgorod. Under the Metro Bridge (and my bike in its old configuration).'
    },
    {
      link: './projects/Photography/photos/IMG_7046.jpg',
      description: 'Nizhny Novgorod. Сonstruction under the Metro Bridge.'
    },
    {
      link: './projects/Photography/photos/IMG_6120.jpg',
      description: 'A snake.'
    },
    {
      link: './projects/Photography/photos/IMG_7145.jpg',
      description: 'Nizhny Novgorod. The Bridge on Fedorovsky Prospekt.'
    },
    {
      link: './projects/Photography/photos/IMG_7191.jpg',
      description: 'Nizhny Novgorod. Decorative Crane on "Strelka"'
    },
    {
      link: './projects/Photography/photos/photo_1_2025-07-30_19-00-21.jpg',
      description: 'On the road in the morning.'
    },
    {
      link: './projects/Photography/photos/photo_5_2025-07-30_19-00-21.jpg',
      description: 'On the road in the morning.'
    },
    {
      link: './projects/Photography/photos/photo_8_2025-07-30_19-00-21.jpg',
      description: 'On the road in the morning.'
    },
    {
      link: './projects/Photography/photos/IMG_20250802_112428-small.png',
      description: 'The Arkhyz Mountains near the Sofiysky Saddle.'
    },
    {
      link: './projects/Photography/photos/IMG_20250802_115156-small.png',
      description: 'The Arkhyz Mountains near the Sofiysky Saddle.'
    },
    {
      link: './projects/Photography/photos/IMG_20250804_190323-small.png',
      description: 'The Arkhyz Mountains near the lakes.'
    },
    {
      link: './projects/Photography/photos/IMG_20250805_072303-small.png',
      description: 'The Arkhyz Mountains near the lakes.'
    },
    {
      link: './projects/Photography/photos/IMG_7173.jpg',
      description: 'Nizhny Novgorod. The radio tower near the Nebo shopping center.'
    },
    {
      link: './projects/Photography/photos/IMG_7540.jpg',
      description: 'Blood Moon.'
    },
    {
      link: './projects/Photography/photos/IMG_7601.jpg',
      description: 'Big Half-Moon.'
    },
    {
      link: './projects/Photography/photos/IMG_7545.jpg',
      description: 'Nizhny Novgorod in neonish style.'
    },
    {
      link: './projects/Photography/photos/IMG_7823.jpg',
      description: 'Cooling lamp.'
    },
    {
      link: './projects/Photography/photos/IMG_8033.jpg',
      description: ''
    },
    {
      link: './projects/Photography/photos/IMG_8099.jpg',
      description: 'The Woman in the Window.'
    },
    {
      link: './projects/Photography/photos/IMG_7294.jpg',
      description: 'St. Petersburg. A building on the waterfront.'
    },
    {
      link: './projects/Photography/photos/IMG_7307.jpg',
      description: 'St. Petersburg. Lights at Metro Station.'
    },
  ]
}

export default async function (root) {
  data.html = await (await fetch('./projects/Photography/main.html')).text();

  root.innerHTML = data.html;

  datt(root, data);
}