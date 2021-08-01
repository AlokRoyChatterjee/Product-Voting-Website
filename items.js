window.Seed = (function () {
    function getproductvotes() {
      return Math.floor((Math.random() * 40) + 10);
    }
  
    const items = [
      {
        id: 1,
        title: 'Product 1',
        description: 'Info about product 1',
        url: '#',
        votes: getproductvotes(),
        submitterAvatarUrl: 'src/images/avatars/daniel.jpg',
        productImageUrl: 'src/images/items/image-aqua.png',
      },
      {
        id: 2,
        title: 'Product 2',
        description: 'Info about product 2',
        url: '#',
        votes: getproductvotes(),
        submitterAvatarUrl: 'src/images/avatars/kristy.png',
        productImageUrl: 'src/images/items/image-rose.png',
      },
      {
        id: 3,
        title: 'Product 3',
        description: 'Info about product 3',
        url: '#',
        votes: getproductvotes(),
        submitterAvatarUrl: 'src/images/avatars/veronika.jpg',
        productImageUrl: 'src/images/items/image-steel.png',
      },
      {
        id: 4,
        title: 'Product 4',
        description: 'Info about product 4',
        url: '#',
        votes: getproductvotes(),
        submitterAvatarUrl: 'src/images/avatars/molly.png',
        productImageUrl: 'src/images/items/image-yellow.png',
      },
    ];
  
    return { items: items };
  }());
  