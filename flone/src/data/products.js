const randomPrice = () => (Math.floor(Math.random() * 100) * 1000)

// const randomId = () => (Math.floor(Math.random() * 10000))

// const randomImage = () => (`https://picsum.photos/id/${randomId()}/600/800`)


export default [
  {
    "id": "1",
    "sku": "asdf123",
    "name": "Lorem ipsum jacket",
    "price": randomPrice(),
    "discount": 0,
    "offerEnd": "October 5, 2020 12:11:00",
    "new": false,
    "rating": 4,
    "saleCount": 54,
    "category": [
      "fashion",
      "men"
    ],
    "tag": [
      "fashion",
      "men",
      "jacket",
      "full sleeve"
    ],
    "variation": [
      {
        "color": "white",
        "image": "/assets/img/product/fashion/1.jpg",
        "size": [
          {
            "name": "x",
            "stock": 3
          },
          {
            "name": "m",
            "stock": 2
          },
          {
            "name": "xl",
            "stock": 5
          }
        ]
      },
      {
        "color": "black",
        "image": "/assets/img/product/fashion/8.jpg",
        "size": [
          {
            "name": "x",
            "stock": 4
          },
          {
            "name": "m",
            "stock": 7
          },
          {
            "name": "xl",
            "stock": 9
          },
          {
            "name": "xxl",
            "stock": 1
          }
        ]
      },
      {
        "color": "brown",
        "image": "/assets/img/product/fashion/3.jpg",
        "size": [
          {
            "name": "x",
            "stock": 1
          },
          {
            "name": "m",
            "stock": 2
          },
          {
            "name": "xl",
            "stock": 4
          },
          {
            "name": "xxl",
            "stock": 5
          }
        ]
      }
    ],
    "image": [
      "/assets/img/product/fashion/1.jpg",
      "/assets/img/product/fashion/3.jpg",
      "/assets/img/product/fashion/6.jpg",
      "/assets/img/product/fashion/8.jpg",
      "/assets/img/product/fashion/9.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
  },
  {
    "id": "2",
    "sku": "asdf124",
    "name": "Lorem ipsum coat",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 3,
    "saleCount": 12,
    "category": [
      "fashion",
      "women"
    ],
    "tag": [
      "fashion",
      "women",
      "coat",
      "full sleeve"
    ],
    "variation": [
      {
        "color": "blue",
        "image": "/assets/img/product/fashion/2.jpg",
        "size": [
          {
            "name": "x",
            "stock": 3
          },
          {
            "name": "m",
            "stock": 6
          },
          {
            "name": "xl",
            "stock": 7
          }
        ]
      },
      {
        "color": "brown",
        "image": "/assets/img/product/fashion/4.jpg",
        "size": [
          {
            "name": "x",
            "stock": 4
          },
          {
            "name": "m",
            "stock": 8
          },
          {
            "name": "xl",
            "stock": 3
          },
          {
            "name": "xxl",
            "stock": 7
          }
        ]
      },
      {
        "color": "black",
        "image": "/assets/img/product/fashion/5.jpg",
        "size": [
          {
            "name": "x",
            "stock": 3
          },
          {
            "name": "m",
            "stock": 7
          },
          {
            "name": "xl",
            "stock": 5
          },
          {
            "name": "xxl",
            "stock": 7
          }
        ]
      }
    ],
    "image": [
      "/assets/img/product/fashion/2.jpg",
      "/assets/img/product/fashion/4.jpg",
      "/assets/img/product/fashion/5.jpg",
      "/assets/img/product/fashion/7.jpg",
      "/assets/img/product/fashion/9.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
  },
  {
    "id": "3",
    "sku": "asdf125",
    "name": "Lorem ipsum jacket",
    "price": randomPrice(),
    "discount": 0,
    "offerEnd": "October 2, 2020 12:11:00",
    "new": true,
    "rating": 5,
    "saleCount": 36,
    "category": [
      "fashion",
      "men"
    ],
    "tag": [
      "fashion",
      "men",
      "jacket",
      "full sleeve"
    ],
    "variation": [
      {
        "color": "white",
        "image": "/assets/img/product/fashion/1.jpg",
        "size": [
          {
            "name": "x",
            "stock": 3
          },
          {
            "name": "m",
            "stock": 2
          },
          {
            "name": "xl",
            "stock": 5
          }
        ]
      },
      {
        "color": "black",
        "image": "/assets/img/product/fashion/8.jpg",
        "size": [
          {
            "name": "x",
            "stock": 4
          },
          {
            "name": "m",
            "stock": 7
          },
          {
            "name": "xl",
            "stock": 9
          },
          {
            "name": "xxl",
            "stock": 1
          }
        ]
      },
      {
        "color": "brown",
        "image": "/assets/img/product/fashion/3.jpg",
        "size": [
          {
            "name": "x",
            "stock": 1
          },
          {
            "name": "m",
            "stock": 2
          },
          {
            "name": "xl",
            "stock": 4
          },
          {
            "name": "xxl",
            "stock": 5
          }
        ]
      }
    ],
    "image": [
      "/assets/img/product/fashion/3.jpg",
      "/assets/img/product/fashion/1.jpg",
      "/assets/img/product/fashion/6.jpg",
      "/assets/img/product/fashion/8.jpg",
      "/assets/img/product/fashion/9.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
  },
  {
    "id": "4",
    "sku": "asdf126",
    "name": "Lorem ipsum fashion coat",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 4,
    "saleCount": 20,
    "category": [
      "fashion",
      "women"
    ],
    "tag": [
      "fashion",
      "women",
      "coat",
      "full sleeve"
    ],
    "variation": [
      {
        "color": "blue",
        "image": "/assets/img/product/fashion/2.jpg",
        "size": [
          {
            "name": "x",
            "stock": 3
          },
          {
            "name": "m",
            "stock": 6
          },
          {
            "name": "xl",
            "stock": 7
          }
        ]
      },
      {
        "color": "brown",
        "image": "/assets/img/product/fashion/4.jpg",
        "size": [
          {
            "name": "x",
            "stock": 4
          },
          {
            "name": "m",
            "stock": 8
          },
          {
            "name": "xl",
            "stock": 3
          },
          {
            "name": "xxl",
            "stock": 7
          }
        ]
      },
      {
        "color": "black",
        "image": "/assets/img/product/fashion/5.jpg",
        "size": [
          {
            "name": "x",
            "stock": 3
          },
          {
            "name": "m",
            "stock": 7
          },
          {
            "name": "xl",
            "stock": 5
          },
          {
            "name": "xxl",
            "stock": 7
          }
        ]
      }
    ],
    "image": [
      "/assets/img/product/fashion/4.jpg",
      "/assets/img/product/fashion/2.jpg",
      "/assets/img/product/fashion/5.jpg",
      "/assets/img/product/fashion/7.jpg",
      "/assets/img/product/fashion/9.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
  },
  {
    "id": "5",
    "sku": "asdf127",
    "name": "Lorem ipsum female coat",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 25,
    "category": [
      "fashion",
      "women"
    ],
    "tag": [
      "fashion",
      "women",
      "coat",
      "full sleeve"
    ],
    "variation": [
      {
        "color": "blue",
        "image": "/assets/img/product/fashion/2.jpg",
        "size": [
          {
            "name": "x",
            "stock": 3
          },
          {
            "name": "m",
            "stock": 6
          },
          {
            "name": "xl",
            "stock": 7
          }
        ]
      },
      {
        "color": "brown",
        "image": "/assets/img/product/fashion/4.jpg",
        "size": [
          {
            "name": "x",
            "stock": 4
          },
          {
            "name": "m",
            "stock": 8
          },
          {
            "name": "xl",
            "stock": 3
          },
          {
            "name": "xxl",
            "stock": 7
          }
        ]
      },
      {
        "color": "black",
        "image": "/assets/img/product/fashion/5.jpg",
        "size": [
          {
            "name": "x",
            "stock": 3
          },
          {
            "name": "m",
            "stock": 7
          },
          {
            "name": "xl",
            "stock": 5
          },
          {
            "name": "xxl",
            "stock": 7
          }
        ]
      }
    ],
    "image": [
      "/assets/img/product/fashion/5.jpg",
      "/assets/img/product/fashion/2.jpg",
      "/assets/img/product/fashion/4.jpg",
      "/assets/img/product/fashion/7.jpg",
      "/assets/img/product/fashion/9.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
  },
  {
    "id": "6",
    "sku": "asdf128",
    "name": "Lorem ipsum jacket",
    "price": randomPrice(),
    "discount": 0,
    "offerEnd": "October 17, 2020 12:11:00",
    "new": true,
    "rating": 5,
    "saleCount": 65,
    "category": [
      "fashion",
      "men"
    ],
    "tag": [
      "fashion",
      "men",
      "jacket",
      "full sleeve"
    ],
    "variation": [
      {
        "color": "white",
        "image": "/assets/img/product/fashion/1.jpg",
        "size": [
          {
            "name": "x",
            "stock": 3
          },
          {
            "name": "m",
            "stock": 2
          },
          {
            "name": "xl",
            "stock": 5
          }
        ]
      },
      {
        "color": "black",
        "image": "/assets/img/product/fashion/8.jpg",
        "size": [
          {
            "name": "x",
            "stock": 4
          },
          {
            "name": "m",
            "stock": 7
          },
          {
            "name": "xl",
            "stock": 9
          },
          {
            "name": "xxl",
            "stock": 1
          }
        ]
      },
      {
        "color": "brown",
        "image": "/assets/img/product/fashion/3.jpg",
        "size": [
          {
            "name": "x",
            "stock": 1
          },
          {
            "name": "m",
            "stock": 2
          },
          {
            "name": "xl",
            "stock": 4
          },
          {
            "name": "xxl",
            "stock": 5
          }
        ]
      }
    ],
    "image": [
      "/assets/img/product/fashion/6.jpg",
      "/assets/img/product/fashion/3.jpg",
      "/assets/img/product/fashion/1.jpg",
      "/assets/img/product/fashion/8.jpg",
      "/assets/img/product/fashion/9.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
  },
  {
    "id": "7",
    "sku": "asdf129",
    "name": "Lorem ipsum fashion female coat",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 55,
    "category": [
      "fashion",
      "women"
    ],
    "tag": [
      "fashion",
      "women",
      "coat",
      "full sleeve"
    ],
    "variation": [
      {
        "color": "blue",
        "image": "/assets/img/product/fashion/2.jpg",
        "size": [
          {
            "name": "x",
            "stock": 3
          },
          {
            "name": "m",
            "stock": 6
          },
          {
            "name": "xl",
            "stock": 7
          }
        ]
      },
      {
        "color": "brown",
        "image": "/assets/img/product/fashion/4.jpg",
        "size": [
          {
            "name": "x",
            "stock": 4
          },
          {
            "name": "m",
            "stock": 8
          },
          {
            "name": "xl",
            "stock": 3
          },
          {
            "name": "xxl",
            "stock": 7
          }
        ]
      },
      {
        "color": "black",
        "image": "/assets/img/product/fashion/5.jpg",
        "size": [
          {
            "name": "x",
            "stock": 3
          },
          {
            "name": "m",
            "stock": 7
          },
          {
            "name": "xl",
            "stock": 5
          },
          {
            "name": "xxl",
            "stock": 7
          }
        ]
      }
    ],
    "image": [
      "/assets/img/product/fashion/7.jpg",
      "/assets/img/product/fashion/5.jpg",
      "/assets/img/product/fashion/2.jpg",
      "/assets/img/product/fashion/4.jpg",
      "/assets/img/product/fashion/9.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
  },
  {
    "id": "8",
    "sku": "asdf130",
    "name": "Lorem ipsum fashion jacket",
    "price": randomPrice(),
    "discount": 0,
    "offerEnd": "October 18, 2020 12:11:00",
    "new": false,
    "rating": 5,
    "saleCount": 83,
    "category": [
      "fashion",
      "men"
    ],
    "tag": [
      "fashion",
      "men",
      "jacket",
      "full sleeve"
    ],
    "stock": 5,
    "image": [
      "/assets/img/product/fashion/8.jpg",
      "/assets/img/product/fashion/6.jpg",
      "/assets/img/product/fashion/3.jpg",
      "/assets/img/product/fashion/1.jpg",
      "/assets/img/product/fashion/9.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
  },
  {
    "id": "9",
    "sku": "asdf131",
    "name": "Lorem ipsum fashion female top",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 4,
    "saleCount": 95,
    "category": [
      "fashion",
      "women"
    ],
    "tag": [
      "fashion",
      "women",
      "top",
      "sleeveless"
    ],
    "stock": 5,
    "affiliateLink": "//www.amazon.com",
    "image": [
      "/assets/img/product/fashion/9.jpg",
      "/assets/img/product/fashion/7.jpg",
      "/assets/img/product/fashion/5.jpg",
      "/assets/img/product/fashion/2.jpg",
      "/assets/img/product/fashion/4.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "10",
    "sku": "asdf132",
    "name": "Lorem ipsum blender",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 4,
    "saleCount": 90,
    "category": [
      "electronics"
    ],
    "tag": [
      "electronics"
    ],
    "stock": 15,
    "image": [
      "/assets/img/product/electronics/1.jpg",
      "/assets/img/product/electronics/2.jpg",
      "/assets/img/product/electronics/3.jpg",
      "/assets/img/product/electronics/4.jpg",
      "/assets/img/product/electronics/5.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "11",
    "sku": "asdf133",
    "name": "Lorem ipsum speaker",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 190,
    "category": [
      "electronics"
    ],
    "tag": [
      "electronics"
    ],
    "stock": 25,
    "image": [
      "/assets/img/product/electronics/2.jpg",
      "/assets/img/product/electronics/3.jpg",
      "/assets/img/product/electronics/4.jpg",
      "/assets/img/product/electronics/5.jpg",
      "/assets/img/product/electronics/6.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "12",
    "sku": "asdf134",
    "name": "Lorem ipsum camera",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 3,
    "saleCount": 90,
    "category": [
      "electronics"
    ],
    "tag": [
      "electronics"
    ],
    "stock": 20,
    "image": [
      "/assets/img/product/electronics/3.jpg",
      "/assets/img/product/electronics/4.jpg",
      "/assets/img/product/electronics/5.jpg",
      "/assets/img/product/electronics/6.jpg",
      "/assets/img/product/electronics/7.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "13",
    "sku": "asdf135",
    "name": "Lorem ipsum monitor",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 4,
    "saleCount": 100,
    "category": [
      "electronics"
    ],
    "tag": [
      "electronics"
    ],
    "stock": 40,
    "image": [
      "/assets/img/product/electronics/4.jpg",
      "/assets/img/product/electronics/5.jpg",
      "/assets/img/product/electronics/6.jpg",
      "/assets/img/product/electronics/7.jpg",
      "/assets/img/product/electronics/8.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "14",
    "sku": "asdf136",
    "name": "Lorem ipsum small speaker",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 120,
    "category": [
      "electronics"
    ],
    "tag": [
      "electronics"
    ],
    "stock": 45,
    "image": [
      "/assets/img/product/electronics/5.jpg",
      "/assets/img/product/electronics/6.jpg",
      "/assets/img/product/electronics/7.jpg",
      "/assets/img/product/electronics/8.jpg",
      "/assets/img/product/electronics/1.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "15",
    "sku": "asdf137",
    "name": "Lorem ipsum microphone",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 4,
    "saleCount": 20,
    "category": [
      "electronics"
    ],
    "tag": [
      "electronics"
    ],
    "stock": 5,
    "image": [
      "/assets/img/product/electronics/6.jpg",
      "/assets/img/product/electronics/7.jpg",
      "/assets/img/product/electronics/8.jpg",
      "/assets/img/product/electronics/1.jpg",
      "/assets/img/product/electronics/2.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "16",
    "sku": "asdf138",
    "name": "Lorem ipsum grinder",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 25,
    "category": [
      "electronics"
    ],
    "tag": [
      "electronics"
    ],
    "stock": 7,
    "image": [
      "/assets/img/product/electronics/7.jpg",
      "/assets/img/product/electronics/8.jpg",
      "/assets/img/product/electronics/1.jpg",
      "/assets/img/product/electronics/2.jpg",
      "/assets/img/product/electronics/3.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "17",
    "sku": "asdf139",
    "name": "Lorem ipsum bluetooth",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 4,
    "saleCount": 15,
    "category": [
      "electronics"
    ],
    "tag": [
      "electronics"
    ],
    "stock": 6,
    "image": [
      "/assets/img/product/electronics/8.jpg",
      "/assets/img/product/electronics/1.jpg",
      "/assets/img/product/electronics/2.jpg",
      "/assets/img/product/electronics/3.jpg",
      "/assets/img/product/electronics/4.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "18",
    "sku": "asdf140",
    "name": "Lorem ipsum chair one",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 4,
    "saleCount": 90,
    "category": [
      "furniture"
    ],
    "tag": [
      "furniture"
    ],
    "stock": 15,
    "image": [
      "/assets/img/product/furnitures/1.jpg",
      "/assets/img/product/furnitures/2.jpg",
      "/assets/img/product/furnitures/3.jpg",
      "/assets/img/product/furnitures/4.jpg",
      "/assets/img/product/furnitures/5.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "19",
    "sku": "asdf141",
    "name": "Lorem ipsum chair two",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 190,
    "category": [
      "furniture"
    ],
    "tag": [
      "furniture"
    ],
    "stock": 25,
    "image": [
      "/assets/img/product/furnitures/2.jpg",
      "/assets/img/product/furnitures/3.jpg",
      "/assets/img/product/furnitures/4.jpg",
      "/assets/img/product/furnitures/5.jpg",
      "/assets/img/product/furnitures/6.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "20",
    "sku": "asdf142",
    "name": "Lorem ipsum chair three",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 3,
    "saleCount": 90,
    "category": [
      "furniture"
    ],
    "tag": [
      "furniture"
    ],
    "stock": 20,
    "image": [
      "/assets/img/product/furnitures/3.jpg",
      "/assets/img/product/furnitures/4.jpg",
      "/assets/img/product/furnitures/5.jpg",
      "/assets/img/product/furnitures/6.jpg",
      "/assets/img/product/furnitures/7.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "21",
    "sku": "asdf143",
    "name": "Lorem ipsum sofa one",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 4,
    "saleCount": 100,
    "category": [
      "furniture"
    ],
    "tag": [
      "furniture"
    ],
    "stock": 40,
    "image": [
      "/assets/img/product/furnitures/4.jpg",
      "/assets/img/product/furnitures/5.jpg",
      "/assets/img/product/furnitures/6.jpg",
      "/assets/img/product/furnitures/7.jpg",
      "/assets/img/product/furnitures/8.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "22",
    "sku": "asdf144",
    "name": "Lorem ipsum sofa two",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 120,
    "category": [
      "furniture"
    ],
    "tag": [
      "furniture"
    ],
    "stock": 45,
    "image": [
      "/assets/img/product/furnitures/5.jpg",
      "/assets/img/product/furnitures/6.jpg",
      "/assets/img/product/furnitures/7.jpg",
      "/assets/img/product/furnitures/8.jpg",
      "/assets/img/product/furnitures/1.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "23",
    "sku": "asdf145",
    "name": "Lorem ipsum sofa three",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 4,
    "saleCount": 20,
    "category": [
      "furniture"
    ],
    "tag": [
      "furniture"
    ],
    "stock": 5,
    "image": [
      "/assets/img/product/furnitures/6.jpg",
      "/assets/img/product/furnitures/7.jpg",
      "/assets/img/product/furnitures/8.jpg",
      "/assets/img/product/furnitures/1.jpg",
      "/assets/img/product/furnitures/2.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "24",
    "sku": "asdf146",
    "name": "Lorem ipsum sofa four",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 25,
    "category": [
      "furniture"
    ],
    "tag": [
      "furniture"
    ],
    "stock": 7,
    "image": [
      "/assets/img/product/furnitures/7.jpg",
      "/assets/img/product/furnitures/8.jpg",
      "/assets/img/product/furnitures/1.jpg",
      "/assets/img/product/furnitures/2.jpg",
      "/assets/img/product/furnitures/3.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "25",
    "sku": "asdf147",
    "name": "Lorem ipsum sofa five",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 4,
    "saleCount": 15,
    "category": [
      "furniture"
    ],
    "tag": [
      "furniture"
    ],
    "stock": 6,
    "image": [
      "/assets/img/product/furnitures/8.jpg",
      "/assets/img/product/furnitures/1.jpg",
      "/assets/img/product/furnitures/2.jpg",
      "/assets/img/product/furnitures/3.jpg",
      "/assets/img/product/furnitures/4.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "26",
    "sku": "asdf148",
    "name": "Lorem ipsum plant one",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 4,
    "saleCount": 90,
    "category": [
      "plant"
    ],
    "tag": [
      "plant"
    ],
    "stock": 15,
    "image": [
      "/assets/img/product/plants/1.jpg",
      "/assets/img/product/plants/2.jpg",
      "/assets/img/product/plants/3.jpg",
      "/assets/img/product/plants/4.jpg",
      "/assets/img/product/plants/5.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "27",
    "sku": "asdf149",
    "name": "Lorem ipsum plant two",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 190,
    "category": [
      "plant"
    ],
    "tag": [
      "plant"
    ],
    "stock": 25,
    "image": [
      "/assets/img/product/plants/2.jpg",
      "/assets/img/product/plants/3.jpg",
      "/assets/img/product/plants/4.jpg",
      "/assets/img/product/plants/5.jpg",
      "/assets/img/product/plants/6.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "28",
    "sku": "asdf150",
    "name": "Lorem ipsum plant three",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 3,
    "saleCount": 90,
    "category": [
      "plant"
    ],
    "tag": [
      "plant"
    ],
    "stock": 20,
    "image": [
      "/assets/img/product/plants/3.jpg",
      "/assets/img/product/plants/4.jpg",
      "/assets/img/product/plants/5.jpg",
      "/assets/img/product/plants/6.jpg",
      "/assets/img/product/plants/7.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "29",
    "sku": "asdf151",
    "name": "Lorem ipsum plant four",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 4,
    "saleCount": 100,
    "category": [
      "plant"
    ],
    "tag": [
      "plant"
    ],
    "stock": 40,
    "image": [
      "/assets/img/product/plants/4.jpg",
      "/assets/img/product/plants/5.jpg",
      "/assets/img/product/plants/6.jpg",
      "/assets/img/product/plants/7.jpg",
      "/assets/img/product/plants/8.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "30",
    "sku": "asdf152",
    "name": "Lorem ipsum plant five",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 120,
    "category": [
      "plant"
    ],
    "tag": [
      "plant"
    ],
    "stock": 45,
    "image": [
      "/assets/img/product/plants/5.jpg",
      "/assets/img/product/plants/6.jpg",
      "/assets/img/product/plants/7.jpg",
      "/assets/img/product/plants/8.jpg",
      "/assets/img/product/plants/1.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "31",
    "sku": "asdf153",
    "name": "Lorem ipsum plant six",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 4,
    "saleCount": 20,
    "category": [
      "plant"
    ],
    "tag": [
      "plant"
    ],
    "stock": 5,
    "image": [
      "/assets/img/product/plants/6.jpg",
      "/assets/img/product/plants/7.jpg",
      "/assets/img/product/plants/8.jpg",
      "/assets/img/product/plants/1.jpg",
      "/assets/img/product/plants/2.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "32",
    "sku": "asdf154",
    "name": "Lorem ipsum plant seven",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 25,
    "category": [
      "plant"
    ],
    "tag": [
      "plant"
    ],
    "stock": 7,
    "image": [
      "/assets/img/product/plants/7.jpg",
      "/assets/img/product/plants/8.jpg",
      "/assets/img/product/plants/1.jpg",
      "/assets/img/product/plants/2.jpg",
      "/assets/img/product/plants/3.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "33",
    "sku": "asdf155",
    "name": "Lorem ipsum plant eight",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 4,
    "saleCount": 15,
    "category": [
      "plant"
    ],
    "tag": [
      "plant"
    ],
    "stock": 6,
    "image": [
      "/assets/img/product/plants/8.jpg",
      "/assets/img/product/plants/1.jpg",
      "/assets/img/product/plants/2.jpg",
      "/assets/img/product/plants/3.jpg",
      "/assets/img/product/plants/4.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "34",
    "sku": "asdf156",
    "name": "Lorem ipsum fruit one",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 4,
    "saleCount": 90,
    "category": [
      "organic food"
    ],
    "tag": [
      "organic food"
    ],
    "stock": 15,
    "image": [
      "/assets/img/product/fruits/1.jpg",
      "/assets/img/product/fruits/2.jpg",
      "/assets/img/product/fruits/3.jpg",
      "/assets/img/product/fruits/4.jpg",
      "/assets/img/product/fruits/5.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "35",
    "sku": "asdf157",
    "name": "Lorem ipsum fruit two",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 190,
    "category": [
      "organic food"
    ],
    "tag": [
      "organic food"
    ],
    "stock": 25,
    "image": [
      "/assets/img/product/fruits/2.jpg",
      "/assets/img/product/fruits/3.jpg",
      "/assets/img/product/fruits/4.jpg",
      "/assets/img/product/fruits/5.jpg",
      "/assets/img/product/fruits/6.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "36",
    "sku": "asdf158",
    "name": "Lorem ipsum fruit three",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 3,
    "saleCount": 90,
    "category": [
      "organic food"
    ],
    "tag": [
      "organic food"
    ],
    "stock": 20,
    "image": [
      "/assets/img/product/fruits/3.jpg",
      "/assets/img/product/fruits/4.jpg",
      "/assets/img/product/fruits/5.jpg",
      "/assets/img/product/fruits/6.jpg",
      "/assets/img/product/fruits/7.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "37",
    "sku": "asdf159",
    "name": "Lorem ipsum fruit four",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 4,
    "saleCount": 100,
    "category": [
      "organic food"
    ],
    "tag": [
      "organic food"
    ],
    "stock": 40,
    "image": [
      "/assets/img/product/fruits/4.jpg",
      "/assets/img/product/fruits/5.jpg",
      "/assets/img/product/fruits/6.jpg",
      "/assets/img/product/fruits/7.jpg",
      "/assets/img/product/fruits/8.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "38",
    "sku": "asdf160",
    "name": "Lorem ipsum fruit five",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 120,
    "category": [
      "organic food"
    ],
    "tag": [
      "organic food"
    ],
    "stock": 45,
    "image": [
      "/assets/img/product/fruits/5.jpg",
      "/assets/img/product/fruits/6.jpg",
      "/assets/img/product/fruits/7.jpg",
      "/assets/img/product/fruits/8.jpg",
      "/assets/img/product/fruits/1.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "39",
    "sku": "asdf161",
    "name": "Lorem ipsum fruit six",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 4,
    "saleCount": 20,
    "category": [
      "organic food"
    ],
    "tag": [
      "organic food"
    ],
    "stock": 5,
    "image": [
      "/assets/img/product/fruits/6.jpg",
      "/assets/img/product/fruits/7.jpg",
      "/assets/img/product/fruits/8.jpg",
      "/assets/img/product/fruits/1.jpg",
      "/assets/img/product/fruits/2.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "40",
    "sku": "asdf162",
    "name": "Lorem ipsum fruit seven",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 25,
    "category": [
      "organic food"
    ],
    "tag": [
      "organic food"
    ],
    "stock": 7,
    "image": [
      "/assets/img/product/fruits/7.jpg",
      "/assets/img/product/fruits/8.jpg",
      "/assets/img/product/fruits/1.jpg",
      "/assets/img/product/fruits/2.jpg",
      "/assets/img/product/fruits/3.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "41",
    "sku": "asdf163",
    "name": "Lorem ipsum fruit eight",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 4,
    "saleCount": 15,
    "category": [
      "organic food"
    ],
    "tag": [
      "organic food"
    ],
    "stock": 6,
    "image": [
      "/assets/img/product/fruits/8.jpg",
      "/assets/img/product/fruits/1.jpg",
      "/assets/img/product/fruits/2.jpg",
      "/assets/img/product/fruits/3.jpg",
      "/assets/img/product/fruits/4.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "42",
    "sku": "asdf164",
    "name": "Lorem ipsum lamp",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 4,
    "saleCount": 15,
    "category": [
      "electronics"
    ],
    "tag": [
      "electronics"
    ],
    "stock": 7,
    "image": [
      "/assets/img/product/electronics/9.jpg",
      "/assets/img/product/electronics/10.jpg",
      "/assets/img/product/electronics/1.jpg",
      "/assets/img/product/electronics/2.jpg",
      "/assets/img/product/electronics/3.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "43",
    "sku": "asdf165",
    "name": "Lorem ipsum headphone",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 5,
    "saleCount": 5,
    "category": [
      "electronics"
    ],
    "tag": [
      "electronics"
    ],
    "stock": 6,
    "image": [
      "/assets/img/product/electronics/10.jpg",
      "/assets/img/product/electronics/1.jpg",
      "/assets/img/product/electronics/2.jpg",
      "/assets/img/product/electronics/3.jpg",
      "/assets/img/product/electronics/4.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "44",
    "sku": "asdf166",
    "name": "Lorem ipsum flower one",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 4,
    "saleCount": 10,
    "category": [
      "flower"
    ],
    "tag": [
      "flower"
    ],
    "stock": 6,
    "image": [
      "/assets/img/product/flowers/1.jpg",
      "/assets/img/product/flowers/2.jpg",
      "/assets/img/product/flowers/3.jpg",
      "/assets/img/product/flowers/4.jpg",
      "/assets/img/product/flowers/5.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "45",
    "sku": "asdf167",
    "name": "Lorem ipsum flower two",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 5,
    "saleCount": 5,
    "category": [
      "flower"
    ],
    "tag": [
      "flower"
    ],
    "stock": 7,
    "image": [
      "/assets/img/product/flowers/2.jpg",
      "/assets/img/product/flowers/3.jpg",
      "/assets/img/product/flowers/4.jpg",
      "/assets/img/product/flowers/5.jpg",
      "/assets/img/product/flowers/6.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "46",
    "sku": "asdf168",
    "name": "Lorem ipsum flower three",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 4,
    "saleCount": 7,
    "category": [
      "flower"
    ],
    "tag": [
      "flower"
    ],
    "stock": 10,
    "image": [
      "/assets/img/product/flowers/3.jpg",
      "/assets/img/product/flowers/4.jpg",
      "/assets/img/product/flowers/5.jpg",
      "/assets/img/product/flowers/6.jpg",
      "/assets/img/product/flowers/7.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "47",
    "sku": "asdf169",
    "name": "Lorem ipsum flower four",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 10,
    "category": [
      "flower"
    ],
    "tag": [
      "flower"
    ],
    "stock": 6,
    "image": [
      "/assets/img/product/flowers/4.jpg",
      "/assets/img/product/flowers/5.jpg",
      "/assets/img/product/flowers/6.jpg",
      "/assets/img/product/flowers/7.jpg",
      "/assets/img/product/flowers/8.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "48",
    "sku": "asdf170",
    "name": "Lorem ipsum flower five",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 3,
    "saleCount": 4,
    "category": [
      "flower"
    ],
    "tag": [
      "flower"
    ],
    "stock": 7,
    "image": [
      "/assets/img/product/flowers/5.jpg",
      "/assets/img/product/flowers/6.jpg",
      "/assets/img/product/flowers/7.jpg",
      "/assets/img/product/flowers/8.jpg",
      "/assets/img/product/flowers/1.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "49",
    "sku": "asdf171",
    "name": "Lorem ipsum flower six",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 5,
    "saleCount": 2,
    "category": [
      "flower"
    ],
    "tag": [
      "flower"
    ],
    "stock": 10,
    "image": [
      "/assets/img/product/flowers/6.jpg",
      "/assets/img/product/flowers/7.jpg",
      "/assets/img/product/flowers/8.jpg",
      "/assets/img/product/flowers/1.jpg",
      "/assets/img/product/flowers/2.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "50",
    "sku": "asdf172",
    "name": "Lorem ipsum flower seven",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 5,
    "category": [
      "flower"
    ],
    "tag": [
      "flower"
    ],
    "stock": 6,
    "image": [
      "/assets/img/product/flowers/7.jpg",
      "/assets/img/product/flowers/8.jpg",
      "/assets/img/product/flowers/1.jpg",
      "/assets/img/product/flowers/2.jpg",
      "/assets/img/product/flowers/3.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "51",
    "sku": "asdf173",
    "name": "Lorem ipsum flower eight",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 9,
    "category": [
      "flower"
    ],
    "tag": [
      "flower"
    ],
    "stock": 10,
    "image": [
      "/assets/img/product/flowers/8.jpg",
      "/assets/img/product/flowers/1.jpg",
      "/assets/img/product/flowers/2.jpg",
      "/assets/img/product/flowers/3.jpg",
      "/assets/img/product/flowers/4.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "52",
    "sku": "asdf174",
    "name": "Lorem ipsum book one",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 10,
    "category": [
      "book"
    ],
    "tag": [
      "book"
    ],
    "stock": 20,
    "image": [
      "/assets/img/product/books/1.jpg",
      "/assets/img/product/books/2.jpg",
      "/assets/img/product/books/3.jpg",
      "/assets/img/product/books/4.jpg",
      "/assets/img/product/books/5.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "53",
    "sku": "asdf175",
    "name": "Lorem ipsum book two",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 10,
    "category": [
      "book"
    ],
    "tag": [
      "book"
    ],
    "stock": 20,
    "image": [
      "/assets/img/product/books/2.jpg",
      "/assets/img/product/books/3.jpg",
      "/assets/img/product/books/4.jpg",
      "/assets/img/product/books/5.jpg",
      "/assets/img/product/books/6.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "54",
    "sku": "asdf176",
    "name": "Lorem ipsum book three",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 3,
    "saleCount": 11,
    "category": [
      "book"
    ],
    "tag": [
      "book"
    ],
    "stock": 20,
    "image": [
      "/assets/img/product/books/3.jpg",
      "/assets/img/product/books/4.jpg",
      "/assets/img/product/books/5.jpg",
      "/assets/img/product/books/6.jpg",
      "/assets/img/product/books/7.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "55",
    "sku": "asdf177",
    "name": "Lorem ipsum book four",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 4,
    "saleCount": 19,
    "category": [
      "book"
    ],
    "tag": [
      "book"
    ],
    "stock": 40,
    "image": [
      "/assets/img/product/books/4.jpg",
      "/assets/img/product/books/5.jpg",
      "/assets/img/product/books/6.jpg",
      "/assets/img/product/books/7.jpg",
      "/assets/img/product/books/8.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "56",
    "sku": "asdf178",
    "name": "Lorem ipsum book five",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 4,
    "saleCount": 12,
    "category": [
      "book"
    ],
    "tag": [
      "book"
    ],
    "stock": 8,
    "image": [
      "/assets/img/product/books/5.jpg",
      "/assets/img/product/books/6.jpg",
      "/assets/img/product/books/7.jpg",
      "/assets/img/product/books/8.jpg",
      "/assets/img/product/books/1.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "57",
    "sku": "asdf179",
    "name": "Lorem ipsum book six",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 4,
    "saleCount": 19,
    "category": [
      "book"
    ],
    "tag": [
      "book"
    ],
    "stock": 20,
    "image": [
      "/assets/img/product/books/6.jpg",
      "/assets/img/product/books/7.jpg",
      "/assets/img/product/books/8.jpg",
      "/assets/img/product/books/1.jpg",
      "/assets/img/product/books/2.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "58",
    "sku": "asdf180",
    "name": "Lorem ipsum book seven",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 2,
    "saleCount": 9,
    "category": [
      "book"
    ],
    "tag": [
      "book"
    ],
    "stock": 11,
    "image": [
      "/assets/img/product/books/7.jpg",
      "/assets/img/product/books/8.jpg",
      "/assets/img/product/books/1.jpg",
      "/assets/img/product/books/2.jpg",
      "/assets/img/product/books/3.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "59",
    "sku": "asdf181",
    "name": "Lorem ipsum book eight",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 3,
    "saleCount": 19,
    "category": [
      "book"
    ],
    "tag": [
      "book"
    ],
    "stock": 30,
    "image": [
      "/assets/img/product/books/8.jpg",
      "/assets/img/product/books/1.jpg",
      "/assets/img/product/books/2.jpg",
      "/assets/img/product/books/3.jpg",
      "/assets/img/product/books/4.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "60",
    "sku": "asdf182",
    "name": "Lorem ipsum cosmetics one",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 3,
    "saleCount": 20,
    "category": [
      "cosmetics"
    ],
    "tag": [
      "cosmetics"
    ],
    "stock": 20,
    "image": [
      "/assets/img/product/cosmetics/1.jpg",
      "/assets/img/product/cosmetics/2.jpg",
      "/assets/img/product/cosmetics/3.jpg",
      "/assets/img/product/cosmetics/4.jpg",
      "/assets/img/product/cosmetics/5.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "61",
    "sku": "asdf183",
    "name": "Lorem ipsum cosmetics two",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 5,
    "saleCount": 9,
    "category": [
      "cosmetics"
    ],
    "tag": [
      "cosmetics"
    ],
    "stock": 20,
    "image": [
      "/assets/img/product/cosmetics/2.jpg",
      "/assets/img/product/cosmetics/3.jpg",
      "/assets/img/product/cosmetics/4.jpg",
      "/assets/img/product/cosmetics/5.jpg",
      "/assets/img/product/cosmetics/6.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "62",
    "sku": "asdf184",
    "name": "Lorem ipsum cosmetics three",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 29,
    "category": [
      "cosmetics"
    ],
    "tag": [
      "cosmetics"
    ],
    "stock": 20,
    "image": [
      "/assets/img/product/cosmetics/3.jpg",
      "/assets/img/product/cosmetics/4.jpg",
      "/assets/img/product/cosmetics/5.jpg",
      "/assets/img/product/cosmetics/6.jpg",
      "/assets/img/product/cosmetics/7.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "63",
    "sku": "asdf185",
    "name": "Lorem ipsum cosmetics four",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 4,
    "saleCount": 20,
    "category": [
      "cosmetics"
    ],
    "tag": [
      "cosmetics"
    ],
    "stock": 10,
    "image": [
      "/assets/img/product/cosmetics/4.jpg",
      "/assets/img/product/cosmetics/5.jpg",
      "/assets/img/product/cosmetics/6.jpg",
      "/assets/img/product/cosmetics/7.jpg",
      "/assets/img/product/cosmetics/8.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "64",
    "sku": "asdf186",
    "name": "Lorem ipsum cosmetics five",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 20,
    "category": [
      "cosmetics"
    ],
    "tag": [
      "cosmetics"
    ],
    "stock": 20,
    "image": [
      "/assets/img/product/cosmetics/5.jpg",
      "/assets/img/product/cosmetics/6.jpg",
      "/assets/img/product/cosmetics/7.jpg",
      "/assets/img/product/cosmetics/8.jpg",
      "/assets/img/product/cosmetics/1.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "65",
    "sku": "asdf187",
    "name": "Lorem ipsum cosmetics six",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 2,
    "saleCount": 29,
    "category": [
      "cosmetics"
    ],
    "tag": [
      "cosmetics"
    ],
    "stock": 20,
    "image": [
      "/assets/img/product/cosmetics/6.jpg",
      "/assets/img/product/cosmetics/7.jpg",
      "/assets/img/product/cosmetics/8.jpg",
      "/assets/img/product/cosmetics/1.jpg",
      "/assets/img/product/cosmetics/2.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "66",
    "sku": "asdf188",
    "name": "Lorem ipsum cosmetics seven",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 4,
    "saleCount": 10,
    "category": [
      "cosmetics"
    ],
    "tag": [
      "cosmetics"
    ],
    "stock": 20,
    "image": [
      "/assets/img/product/cosmetics/7.jpg",
      "/assets/img/product/cosmetics/8.jpg",
      "/assets/img/product/cosmetics/1.jpg",
      "/assets/img/product/cosmetics/2.jpg",
      "/assets/img/product/cosmetics/3.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "67",
    "sku": "asdf189",
    "name": "Lorem ipsum cosmetics eight",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 4,
    "saleCount": 29,
    "category": [
      "cosmetics"
    ],
    "tag": [
      "cosmetics"
    ],
    "stock": 20,
    "image": [
      "/assets/img/product/cosmetics/8.jpg",
      "/assets/img/product/cosmetics/1.jpg",
      "/assets/img/product/cosmetics/2.jpg",
      "/assets/img/product/cosmetics/3.jpg",
      "/assets/img/product/cosmetics/4.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "68",
    "sku": "asdf190",
    "name": "Lorem ipsum accessories one",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 4,
    "saleCount": 29,
    "category": [
      "accessories"
    ],
    "tag": [
      "accessories"
    ],
    "stock": 20,
    "image": [
      "/assets/img/product/accessories/1.jpg",
      "/assets/img/product/accessories/2.jpg",
      "/assets/img/product/accessories/3.jpg",
      "/assets/img/product/accessories/4.jpg",
      "/assets/img/product/accessories/5.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "69",
    "sku": "asdf191",
    "name": "Lorem ipsum accessories two",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 5,
    "saleCount": 19,
    "category": [
      "accessories"
    ],
    "tag": [
      "accessories"
    ],
    "stock": 30,
    "image": [
      "/assets/img/product/accessories/2.jpg",
      "/assets/img/product/accessories/3.jpg",
      "/assets/img/product/accessories/4.jpg",
      "/assets/img/product/accessories/5.jpg",
      "/assets/img/product/accessories/6.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "70",
    "sku": "asdf192",
    "name": "Lorem ipsum accessories three",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 30,
    "category": [
      "accessories"
    ],
    "tag": [
      "accessories"
    ],
    "stock": 10,
    "image": [
      "/assets/img/product/accessories/3.jpg",
      "/assets/img/product/accessories/4.jpg",
      "/assets/img/product/accessories/5.jpg",
      "/assets/img/product/accessories/6.jpg",
      "/assets/img/product/accessories/7.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "71",
    "sku": "asdf193",
    "name": "Lorem ipsum accessories four",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 5,
    "saleCount": 20,
    "category": [
      "accessories"
    ],
    "tag": [
      "accessories"
    ],
    "stock": 30,
    "image": [
      "/assets/img/product/accessories/4.jpg",
      "/assets/img/product/accessories/5.jpg",
      "/assets/img/product/accessories/6.jpg",
      "/assets/img/product/accessories/7.jpg",
      "/assets/img/product/accessories/8.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "72",
    "sku": "asdf194",
    "name": "Lorem ipsum accessories five",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 20,
    "category": [
      "accessories"
    ],
    "tag": [
      "accessories"
    ],
    "stock": 10,
    "image": [
      "/assets/img/product/accessories/5.jpg",
      "/assets/img/product/accessories/6.jpg",
      "/assets/img/product/accessories/7.jpg",
      "/assets/img/product/accessories/8.jpg",
      "/assets/img/product/accessories/9.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "73",
    "sku": "asdf195",
    "name": "Lorem ipsum accessories six",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 19,
    "category": [
      "accessories"
    ],
    "tag": [
      "accessories"
    ],
    "stock": 30,
    "image": [
      "/assets/img/product/accessories/6.jpg",
      "/assets/img/product/accessories/7.jpg",
      "/assets/img/product/accessories/8.jpg",
      "/assets/img/product/accessories/9.jpg",
      "/assets/img/product/accessories/10.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "74",
    "sku": "asdf196",
    "name": "Lorem ipsum accessories seven",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 15,
    "category": [
      "accessories"
    ],
    "tag": [
      "accessories"
    ],
    "stock": 10,
    "image": [
      "/assets/img/product/accessories/7.jpg",
      "/assets/img/product/accessories/8.jpg",
      "/assets/img/product/accessories/9.jpg",
      "/assets/img/product/accessories/10.jpg",
      "/assets/img/product/accessories/11.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "75",
    "sku": "asdf197",
    "name": "Lorem ipsum accessories eight",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 2,
    "category": [
      "accessories"
    ],
    "tag": [
      "accessories"
    ],
    "stock": 10,
    "image": [
      "/assets/img/product/accessories/8.jpg",
      "/assets/img/product/accessories/9.jpg",
      "/assets/img/product/accessories/10.jpg",
      "/assets/img/product/accessories/11.jpg",
      "/assets/img/product/accessories/12.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "76",
    "sku": "asdf198",
    "name": "Lorem ipsum accessories nine",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 34,
    "category": [
      "accessories"
    ],
    "tag": [
      "accessories"
    ],
    "stock": 10,
    "image": [
      "/assets/img/product/accessories/9.jpg",
      "/assets/img/product/accessories/10.jpg",
      "/assets/img/product/accessories/11.jpg",
      "/assets/img/product/accessories/12.jpg",
      "/assets/img/product/accessories/1.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "77",
    "sku": "asdf199",
    "name": "Lorem ipsum accessories ten",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 19,
    "category": [
      "accessories"
    ],
    "tag": [
      "accessories"
    ],
    "stock": 30,
    "image": [
      "/assets/img/product/accessories/10.jpg",
      "/assets/img/product/accessories/11.jpg",
      "/assets/img/product/accessories/12.jpg",
      "/assets/img/product/accessories/1.jpg",
      "/assets/img/product/accessories/2.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "78",
    "sku": "asdf200",
    "name": "Lorem ipsum accessories eleven",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 4,
    "saleCount": 20,
    "category": [
      "accessories"
    ],
    "tag": [
      "accessories"
    ],
    "stock": 23,
    "image": [
      "/assets/img/product/accessories/11.jpg",
      "/assets/img/product/accessories/12.jpg",
      "/assets/img/product/accessories/1.jpg",
      "/assets/img/product/accessories/2.jpg",
      "/assets/img/product/accessories/3.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "79",
    "sku": "asdf201",
    "name": "Lorem ipsum accessories twelve",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 19,
    "category": [
      "accessories"
    ],
    "tag": [
      "accessories"
    ],
    "stock": 10,
    "image": [
      "/assets/img/product/accessories/12.jpg",
      "/assets/img/product/accessories/1.jpg",
      "/assets/img/product/accessories/2.jpg",
      "/assets/img/product/accessories/3.jpg",
      "/assets/img/product/accessories/4.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "80",
    "sku": "asdf202",
    "name": "Lorem ipsum handmade one",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 4,
    "saleCount": 19,
    "category": [
      "handmade"
    ],
    "tag": [
      "handmade"
    ],
    "stock": 10,
    "image": [
      "/assets/img/product/handmade/1.jpg",
      "/assets/img/product/handmade/2.jpg",
      "/assets/img/product/handmade/3.jpg",
      "/assets/img/product/handmade/4.jpg",
      "/assets/img/product/handmade/5.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "81",
    "sku": "asdf203",
    "name": "Lorem ipsum handmade two",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 4,
    "saleCount": 15,
    "category": [
      "handmade"
    ],
    "tag": [
      "handmade"
    ],
    "stock": 7,
    "image": [
      "/assets/img/product/handmade/2.jpg",
      "/assets/img/product/handmade/3.jpg",
      "/assets/img/product/handmade/4.jpg",
      "/assets/img/product/handmade/5.jpg",
      "/assets/img/product/handmade/6.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "82",
    "sku": "asdf204",
    "name": "Lorem ipsum handmade three",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 12,
    "category": [
      "handmade"
    ],
    "tag": [
      "handmade"
    ],
    "stock": 6,
    "image": [
      "/assets/img/product/handmade/3.jpg",
      "/assets/img/product/handmade/4.jpg",
      "/assets/img/product/handmade/5.jpg",
      "/assets/img/product/handmade/6.jpg",
      "/assets/img/product/handmade/7.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "83",
    "sku": "asdf205",
    "name": "Lorem ipsum handmade four",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 3,
    "saleCount": 14,
    "category": [
      "handmade"
    ],
    "tag": [
      "handmade"
    ],
    "stock": 12,
    "image": [
      "/assets/img/product/handmade/4.jpg",
      "/assets/img/product/handmade/5.jpg",
      "/assets/img/product/handmade/6.jpg",
      "/assets/img/product/handmade/7.jpg",
      "/assets/img/product/handmade/8.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "84",
    "sku": "asdf206",
    "name": "Lorem ipsum handmade five",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 3,
    "saleCount": 13,
    "category": [
      "handmade"
    ],
    "tag": [
      "handmade"
    ],
    "stock": 8,
    "image": [
      "/assets/img/product/handmade/5.jpg",
      "/assets/img/product/handmade/6.jpg",
      "/assets/img/product/handmade/7.jpg",
      "/assets/img/product/handmade/8.jpg",
      "/assets/img/product/handmade/1.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "85",
    "sku": "asdf207",
    "name": "Lorem ipsum handmade six",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 17,
    "category": [
      "handmade"
    ],
    "tag": [
      "handmade"
    ],
    "stock": 5,
    "image": [
      "/assets/img/product/handmade/6.jpg",
      "/assets/img/product/handmade/7.jpg",
      "/assets/img/product/handmade/8.jpg",
      "/assets/img/product/handmade/1.jpg",
      "/assets/img/product/handmade/2.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "86",
    "sku": "asdf208",
    "name": "Lorem ipsum handmade seven",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 4,
    "saleCount": 18,
    "category": [
      "handmade"
    ],
    "tag": [
      "handmade"
    ],
    "stock": 5,
    "image": [
      "/assets/img/product/handmade/7.jpg",
      "/assets/img/product/handmade/8.jpg",
      "/assets/img/product/handmade/1.jpg",
      "/assets/img/product/handmade/2.jpg",
      "/assets/img/product/handmade/3.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "87",
    "sku": "asdf209",
    "name": "Lorem ipsum handmade eight",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 20,
    "category": [
      "handmade"
    ],
    "tag": [
      "handmade"
    ],
    "stock": 10,
    "image": [
      "/assets/img/product/handmade/8.jpg",
      "/assets/img/product/handmade/1.jpg",
      "/assets/img/product/handmade/2.jpg",
      "/assets/img/product/handmade/3.jpg",
      "/assets/img/product/handmade/4.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "88",
    "sku": "asdf210",
    "name": "Lorem ipsum kids one",
    "price": randomPrice(),
    "discount": 0,
    "offerEnd": "October 5, 2020 12:11:00",
    "new": false,
    "rating": 4,
    "saleCount": 54,
    "category": [
      "fashion",
      "kids"
    ],
    "tag": [
      "fashion",
      "kids"
    ],
    "variation": [
      {
        "color": "white",
        "image": "/assets/img/product/fashion/23.jpg",
        "size": [
          {
            "name": "x",
            "stock": 3
          },
          {
            "name": "m",
            "stock": 2
          },
          {
            "name": "xl",
            "stock": 5
          }
        ]
      },
      {
        "color": "black",
        "image": "/assets/img/product/fashion/24.jpg",
        "size": [
          {
            "name": "x",
            "stock": 4
          },
          {
            "name": "m",
            "stock": 7
          },
          {
            "name": "xl",
            "stock": 9
          },
          {
            "name": "xxl",
            "stock": 1
          }
        ]
      },
      {
        "color": "brown",
        "image": "/assets/img/product/fashion/25.jpg",
        "size": [
          {
            "name": "x",
            "stock": 1
          },
          {
            "name": "m",
            "stock": 2
          },
          {
            "name": "xl",
            "stock": 4
          },
          {
            "name": "xxl",
            "stock": 5
          }
        ]
      }
    ],
    "image": [
      "/assets/img/product/fashion/23.jpg",
      "/assets/img/product/fashion/24.jpg",
      "/assets/img/product/fashion/25.jpg",
      "/assets/img/product/fashion/26.jpg",
      "/assets/img/product/fashion/27.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
  },
  {
    "id": "89",
    "sku": "asdf211",
    "name": "Lorem ipsum kids two",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 3,
    "saleCount": 12,
    "category": [
      "fashion",
      "kids"
    ],
    "tag": [
      "fashion",
      "kids"
    ],
    "variation": [
      {
        "color": "blue",
        "image": "/assets/img/product/fashion/24.jpg",
        "size": [
          {
            "name": "x",
            "stock": 3
          },
          {
            "name": "m",
            "stock": 6
          },
          {
            "name": "xl",
            "stock": 7
          }
        ]
      },
      {
        "color": "brown",
        "image": "/assets/img/product/fashion/25.jpg",
        "size": [
          {
            "name": "x",
            "stock": 4
          },
          {
            "name": "m",
            "stock": 8
          },
          {
            "name": "xl",
            "stock": 3
          },
          {
            "name": "xxl",
            "stock": 7
          }
        ]
      },
      {
        "color": "black",
        "image": "/assets/img/product/fashion/26.jpg",
        "size": [
          {
            "name": "x",
            "stock": 3
          },
          {
            "name": "m",
            "stock": 7
          },
          {
            "name": "xl",
            "stock": 5
          },
          {
            "name": "xxl",
            "stock": 7
          }
        ]
      }
    ],
    "image": [
      "/assets/img/product/fashion/24.jpg",
      "/assets/img/product/fashion/25.jpg",
      "/assets/img/product/fashion/26.jpg",
      "/assets/img/product/fashion/27.jpg",
      "/assets/img/product/fashion/28.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
  },
  {
    "id": "90",
    "sku": "asdf212",
    "name": "Lorem ipsum kids three",
    "price": randomPrice(),
    "discount": 0,
    "offerEnd": "October 2, 2020 12:11:00",
    "new": true,
    "rating": 5,
    "saleCount": 36,
    "category": [
      "fashion",
      "kids"
    ],
    "tag": [
      "fashion",
      "kids"
    ],
    "variation": [
      {
        "color": "white",
        "image": "/assets/img/product/fashion/25.jpg",
        "size": [
          {
            "name": "x",
            "stock": 3
          },
          {
            "name": "m",
            "stock": 2
          },
          {
            "name": "xl",
            "stock": 5
          }
        ]
      },
      {
        "color": "black",
        "image": "/assets/img/product/fashion/26.jpg",
        "size": [
          {
            "name": "x",
            "stock": 4
          },
          {
            "name": "m",
            "stock": 7
          },
          {
            "name": "xl",
            "stock": 9
          },
          {
            "name": "xxl",
            "stock": 1
          }
        ]
      },
      {
        "color": "brown",
        "image": "/assets/img/product/fashion/27.jpg",
        "size": [
          {
            "name": "x",
            "stock": 1
          },
          {
            "name": "m",
            "stock": 2
          },
          {
            "name": "xl",
            "stock": 4
          },
          {
            "name": "xxl",
            "stock": 5
          }
        ]
      }
    ],
    "image": [
      "/assets/img/product/fashion/25.jpg",
      "/assets/img/product/fashion/26.jpg",
      "/assets/img/product/fashion/27.jpg",
      "/assets/img/product/fashion/28.jpg",
      "/assets/img/product/fashion/29.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
  },
  {
    "id": "91",
    "sku": "asdf213",
    "name": "Lorem ipsum kids four",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 4,
    "saleCount": 20,
    "category": [
      "fashion",
      "kids"
    ],
    "tag": [
      "fashion",
      "kids"
    ],
    "variation": [
      {
        "color": "blue",
        "image": "/assets/img/product/fashion/26.jpg",
        "size": [
          {
            "name": "x",
            "stock": 3
          },
          {
            "name": "m",
            "stock": 6
          },
          {
            "name": "xl",
            "stock": 7
          }
        ]
      },
      {
        "color": "brown",
        "image": "/assets/img/product/fashion/27.jpg",
        "size": [
          {
            "name": "x",
            "stock": 4
          },
          {
            "name": "m",
            "stock": 8
          },
          {
            "name": "xl",
            "stock": 3
          },
          {
            "name": "xxl",
            "stock": 7
          }
        ]
      },
      {
        "color": "black",
        "image": "/assets/img/product/fashion/28.jpg",
        "size": [
          {
            "name": "x",
            "stock": 3
          },
          {
            "name": "m",
            "stock": 7
          },
          {
            "name": "xl",
            "stock": 5
          },
          {
            "name": "xxl",
            "stock": 7
          }
        ]
      }
    ],
    "image": [
      "/assets/img/product/fashion/26.jpg",
      "/assets/img/product/fashion/27.jpg",
      "/assets/img/product/fashion/28.jpg",
      "/assets/img/product/fashion/29.jpg",
      "/assets/img/product/fashion/30.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
  },
  {
    "id": "92",
    "sku": "asdf214",
    "name": "Lorem ipsum kids five",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 25,
    "category": [
      "fashion",
      "kids"
    ],
    "tag": [
      "fashion",
      "kids"
    ],
    "variation": [
      {
        "color": "blue",
        "image": "/assets/img/product/fashion/27.jpg",
        "size": [
          {
            "name": "x",
            "stock": 3
          },
          {
            "name": "m",
            "stock": 6
          },
          {
            "name": "xl",
            "stock": 7
          }
        ]
      },
      {
        "color": "brown",
        "image": "/assets/img/product/fashion/28.jpg",
        "size": [
          {
            "name": "x",
            "stock": 4
          },
          {
            "name": "m",
            "stock": 8
          },
          {
            "name": "xl",
            "stock": 3
          },
          {
            "name": "xxl",
            "stock": 7
          }
        ]
      },
      {
        "color": "black",
        "image": "/assets/img/product/fashion/29.jpg",
        "size": [
          {
            "name": "x",
            "stock": 3
          },
          {
            "name": "m",
            "stock": 7
          },
          {
            "name": "xl",
            "stock": 5
          },
          {
            "name": "xxl",
            "stock": 7
          }
        ]
      }
    ],
    "image": [
      "/assets/img/product/fashion/27.jpg",
      "/assets/img/product/fashion/28.jpg",
      "/assets/img/product/fashion/29.jpg",
      "/assets/img/product/fashion/30.jpg",
      "/assets/img/product/fashion/23.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
  },
  {
    "id": "93",
    "sku": "asdf215",
    "name": "Lorem ipsum kids six",
    "price": randomPrice(),
    "discount": 0,
    "offerEnd": "October 17, 2020 12:11:00",
    "new": true,
    "rating": 5,
    "saleCount": 65,
    "category": [
      "fashion",
      "kids"
    ],
    "tag": [
      "fashion",
      "kids"
    ],
    "variation": [
      {
        "color": "white",
        "image": "/assets/img/product/fashion/28.jpg",
        "size": [
          {
            "name": "x",
            "stock": 3
          },
          {
            "name": "m",
            "stock": 2
          },
          {
            "name": "xl",
            "stock": 5
          }
        ]
      },
      {
        "color": "black",
        "image": "/assets/img/product/fashion/29.jpg",
        "size": [
          {
            "name": "x",
            "stock": 4
          },
          {
            "name": "m",
            "stock": 7
          },
          {
            "name": "xl",
            "stock": 9
          },
          {
            "name": "xxl",
            "stock": 1
          }
        ]
      },
      {
        "color": "brown",
        "image": "/assets/img/product/fashion/30.jpg",
        "size": [
          {
            "name": "x",
            "stock": 1
          },
          {
            "name": "m",
            "stock": 2
          },
          {
            "name": "xl",
            "stock": 4
          },
          {
            "name": "xxl",
            "stock": 5
          }
        ]
      }
    ],
    "image": [
      "/assets/img/product/fashion/28.jpg",
      "/assets/img/product/fashion/29.jpg",
      "/assets/img/product/fashion/30.jpg",
      "/assets/img/product/fashion/23.jpg",
      "/assets/img/product/fashion/24.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
  },
  {
    "id": "94",
    "sku": "asdf216",
    "name": "Lorem ipsum kids seven",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 55,
    "category": [
      "fashion",
      "kids"
    ],
    "tag": [
      "fashion",
      "kids"
    ],
    "variation": [
      {
        "color": "blue",
        "image": "/assets/img/product/fashion/29.jpg",
        "size": [
          {
            "name": "x",
            "stock": 3
          },
          {
            "name": "m",
            "stock": 6
          },
          {
            "name": "xl",
            "stock": 7
          }
        ]
      },
      {
        "color": "brown",
        "image": "/assets/img/product/fashion/30.jpg",
        "size": [
          {
            "name": "x",
            "stock": 4
          },
          {
            "name": "m",
            "stock": 8
          },
          {
            "name": "xl",
            "stock": 3
          },
          {
            "name": "xxl",
            "stock": 7
          }
        ]
      },
      {
        "color": "black",
        "image": "/assets/img/product/fashion/23.jpg",
        "size": [
          {
            "name": "x",
            "stock": 3
          },
          {
            "name": "m",
            "stock": 7
          },
          {
            "name": "xl",
            "stock": 5
          },
          {
            "name": "xxl",
            "stock": 7
          }
        ]
      }
    ],
    "image": [
      "/assets/img/product/fashion/29.jpg",
      "/assets/img/product/fashion/30.jpg",
      "/assets/img/product/fashion/23.jpg",
      "/assets/img/product/fashion/24.jpg",
      "/assets/img/product/fashion/25.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
  },
  {
    "id": "95",
    "sku": "asdf217",
    "name": "Lorem ipsum kids eight",
    "price": randomPrice(),
    "discount": 0,
    "offerEnd": "October 18, 2020 12:11:00",
    "new": false,
    "rating": 5,
    "saleCount": 83,
    "category": [
      "fashion",
      "kids"
    ],
    "tag": [
      "fashion",
      "kids"
    ],
    "stock": 5,
    "image": [
      "/assets/img/product/fashion/30.jpg",
      "/assets/img/product/fashion/23.jpg",
      "/assets/img/product/fashion/24.jpg",
      "/assets/img/product/fashion/25.jpg",
      "/assets/img/product/fashion/26.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
  },
  {
    "id": "96",
    "sku": "asdf218",
    "name": "Lorem ipsum auto part one",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 5,
    "saleCount": 20,
    "category": [
      "auto parts"
    ],
    "tag": [
      "auto parts"
    ],
    "stock": 15,
    "image": [
      "/assets/img/product/auto-parts/1.jpg",
      "/assets/img/product/auto-parts/2.jpg",
      "/assets/img/product/auto-parts/3.jpg",
      "/assets/img/product/auto-parts/4.jpg",
      "/assets/img/product/auto-parts/2.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "97",
    "sku": "asdf219",
    "name": "Lorem ipsum auto part two",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 4,
    "saleCount": 10,
    "category": [
      "auto parts"
    ],
    "tag": [
      "auto parts"
    ],
    "stock": 10,
    "image": [
      "/assets/img/product/auto-parts/2.jpg",
      "/assets/img/product/auto-parts/3.jpg",
      "/assets/img/product/auto-parts/4.jpg",
      "/assets/img/product/auto-parts/1.jpg",
      "/assets/img/product/auto-parts/3.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "98",
    "sku": "asdf220",
    "name": "Lorem ipsum auto part three",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 3,
    "saleCount": 30,
    "category": [
      "auto parts"
    ],
    "tag": [
      "auto parts"
    ],
    "stock": 13,
    "image": [
      "/assets/img/product/auto-parts/3.jpg",
      "/assets/img/product/auto-parts/4.jpg",
      "/assets/img/product/auto-parts/1.jpg",
      "/assets/img/product/auto-parts/2.jpg",
      "/assets/img/product/auto-parts/4.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "99",
    "sku": "asdf221",
    "name": "Lorem ipsum auto part four",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 2,
    "saleCount": 10,
    "category": [
      "auto parts"
    ],
    "tag": [
      "auto parts"
    ],
    "stock": 5,
    "image": [
      "/assets/img/product/auto-parts/4.jpg",
      "/assets/img/product/auto-parts/1.jpg",
      "/assets/img/product/auto-parts/2.jpg",
      "/assets/img/product/auto-parts/3.jpg",
      "/assets/img/product/auto-parts/2.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "100",
    "sku": "asdf222",
    "name": "Lorem ipsum cake one",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 5,
    "saleCount": 10,
    "category": [
      "cakes"
    ],
    "tag": [
      "cakes"
    ],
    "stock": 20,
    "image": [
      "/assets/img/product/cake-shop/1.jpg",
      "/assets/img/product/cake-shop/2.jpg",
      "/assets/img/product/cake-shop/3.jpg",
      "/assets/img/product/cake-shop/4.jpg",
      "/assets/img/product/cake-shop/5.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "101",
    "sku": "asdf223",
    "name": "Lorem ipsum cake two",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 4,
    "saleCount": 15,
    "category": [
      "cakes"
    ],
    "tag": [
      "cakes"
    ],
    "stock": 25,
    "image": [
      "/assets/img/product/cake-shop/2.jpg",
      "/assets/img/product/cake-shop/3.jpg",
      "/assets/img/product/cake-shop/4.jpg",
      "/assets/img/product/cake-shop/5.jpg",
      "/assets/img/product/cake-shop/6.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "102",
    "sku": "asdf224",
    "name": "Lorem ipsum cake three",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 5,
    "saleCount": 30,
    "category": [
      "cakes"
    ],
    "tag": [
      "cakes"
    ],
    "stock": 10,
    "image": [
      "/assets/img/product/cake-shop/3.jpg",
      "/assets/img/product/cake-shop/4.jpg",
      "/assets/img/product/cake-shop/5.jpg",
      "/assets/img/product/cake-shop/6.jpg",
      "/assets/img/product/cake-shop/7.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "103",
    "sku": "asdf225",
    "name": "Lorem ipsum cake four",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 4,
    "saleCount": 14,
    "category": [
      "cakes"
    ],
    "tag": [
      "cakes"
    ],
    "stock": 10,
    "image": [
      "/assets/img/product/cake-shop/4.jpg",
      "/assets/img/product/cake-shop/5.jpg",
      "/assets/img/product/cake-shop/6.jpg",
      "/assets/img/product/cake-shop/7.jpg",
      "/assets/img/product/cake-shop/8.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "104",
    "sku": "asdf226",
    "name": "Lorem ipsum cake five",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 5,
    "saleCount": 30,
    "category": [
      "cakes"
    ],
    "tag": [
      "cakes"
    ],
    "stock": 40,
    "image": [
      "/assets/img/product/cake-shop/5.jpg",
      "/assets/img/product/cake-shop/6.jpg",
      "/assets/img/product/cake-shop/7.jpg",
      "/assets/img/product/cake-shop/8.jpg",
      "/assets/img/product/cake-shop/1.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "105",
    "sku": "asdf227",
    "name": "Lorem ipsum cake six",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 3,
    "saleCount": 30,
    "category": [
      "cakes"
    ],
    "tag": [
      "cakes"
    ],
    "stock": 25,
    "image": [
      "/assets/img/product/cake-shop/6.jpg",
      "/assets/img/product/cake-shop/7.jpg",
      "/assets/img/product/cake-shop/8.jpg",
      "/assets/img/product/cake-shop/1.jpg",
      "/assets/img/product/cake-shop/2.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "106",
    "sku": "asdf228",
    "name": "Lorem ipsum cake seven",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 3,
    "saleCount": 20,
    "category": [
      "cakes"
    ],
    "tag": [
      "cakes"
    ],
    "stock": 40,
    "image": [
      "/assets/img/product/cake-shop/7.jpg",
      "/assets/img/product/cake-shop/8.jpg",
      "/assets/img/product/cake-shop/1.jpg",
      "/assets/img/product/cake-shop/2.jpg",
      "/assets/img/product/cake-shop/3.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "107",
    "sku": "asdf229",
    "name": "Lorem ipsum cake eight",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 3,
    "saleCount": 20,
    "category": [
      "cakes"
    ],
    "tag": [
      "cakes"
    ],
    "stock": 60,
    "image": [
      "/assets/img/product/cake-shop/8.jpg",
      "/assets/img/product/cake-shop/1.jpg",
      "/assets/img/product/cake-shop/2.jpg",
      "/assets/img/product/cake-shop/3.jpg",
      "/assets/img/product/cake-shop/4.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "108",
    "sku": "asdf222",
    "name": "Lorem ipsum cake one",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 5,
    "saleCount": 10,
    "category": [
      "cakes"
    ],
    "tag": [
      "cakes"
    ],
    "stock": 20,
    "image": [
      "/assets/img/product/cake-shop/1.jpg",
      "/assets/img/product/cake-shop/2.jpg",
      "/assets/img/product/cake-shop/3.jpg",
      "/assets/img/product/cake-shop/4.jpg",
      "/assets/img/product/cake-shop/5.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "109",
    "sku": "asdf223",
    "name": "Lorem ipsum cake two",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 4,
    "saleCount": 15,
    "category": [
      "cakes"
    ],
    "tag": [
      "cakes"
    ],
    "stock": 25,
    "image": [
      "/assets/img/product/cake-shop/2.jpg",
      "/assets/img/product/cake-shop/3.jpg",
      "/assets/img/product/cake-shop/4.jpg",
      "/assets/img/product/cake-shop/5.jpg",
      "/assets/img/product/cake-shop/6.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "110",
    "sku": "asdf224",
    "name": "Lorem ipsum cake three",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 5,
    "saleCount": 30,
    "category": [
      "cakes"
    ],
    "tag": [
      "cakes"
    ],
    "stock": 10,
    "image": [
      "/assets/img/product/cake-shop/3.jpg",
      "/assets/img/product/cake-shop/4.jpg",
      "/assets/img/product/cake-shop/5.jpg",
      "/assets/img/product/cake-shop/6.jpg",
      "/assets/img/product/cake-shop/7.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "111",
    "sku": "asdf225",
    "name": "Lorem ipsum cake four",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 4,
    "saleCount": 14,
    "category": [
      "cakes"
    ],
    "tag": [
      "cakes"
    ],
    "stock": 10,
    "image": [
      "/assets/img/product/cake-shop/4.jpg",
      "/assets/img/product/cake-shop/5.jpg",
      "/assets/img/product/cake-shop/6.jpg",
      "/assets/img/product/cake-shop/7.jpg",
      "/assets/img/product/cake-shop/8.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "112",
    "sku": "asdf226",
    "name": "Lorem ipsum cake five",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 5,
    "saleCount": 30,
    "category": [
      "cakes"
    ],
    "tag": [
      "cakes"
    ],
    "stock": 40,
    "image": [
      "/assets/img/product/cake-shop/5.jpg",
      "/assets/img/product/cake-shop/6.jpg",
      "/assets/img/product/cake-shop/7.jpg",
      "/assets/img/product/cake-shop/8.jpg",
      "/assets/img/product/cake-shop/1.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "113",
    "sku": "asdf227",
    "name": "Lorem ipsum cake six",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 3,
    "saleCount": 30,
    "category": [
      "cakes"
    ],
    "tag": [
      "cakes"
    ],
    "stock": 25,
    "image": [
      "/assets/img/product/cake-shop/6.jpg",
      "/assets/img/product/cake-shop/7.jpg",
      "/assets/img/product/cake-shop/8.jpg",
      "/assets/img/product/cake-shop/1.jpg",
      "/assets/img/product/cake-shop/2.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "114",
    "sku": "asdf228",
    "name": "Lorem ipsum cake seven",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 3,
    "saleCount": 20,
    "category": [
      "cakes"
    ],
    "tag": [
      "cakes"
    ],
    "stock": 40,
    "image": [
      "/assets/img/product/cake-shop/7.jpg",
      "/assets/img/product/cake-shop/8.jpg",
      "/assets/img/product/cake-shop/1.jpg",
      "/assets/img/product/cake-shop/2.jpg",
      "/assets/img/product/cake-shop/3.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "115",
    "sku": "asdf229",
    "name": "Lorem ipsum cake eight",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 3,
    "saleCount": 20,
    "category": [
      "cakes"
    ],
    "tag": [
      "cakes"
    ],
    "stock": 60,
    "image": [
      "/assets/img/product/cake-shop/8.jpg",
      "/assets/img/product/cake-shop/1.jpg",
      "/assets/img/product/cake-shop/2.jpg",
      "/assets/img/product/cake-shop/3.jpg",
      "/assets/img/product/cake-shop/4.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "116",
    "sku": "asdf230",
    "name": "Lorem ipsum pet food one",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 5,
    "saleCount": 10,
    "category": [
      "pet food"
    ],
    "tag": [
      "pet food"
    ],
    "stock": 20,
    "image": [
      "/assets/img/product/pet-food/1.jpg",
      "/assets/img/product/pet-food/2.jpg",
      "/assets/img/product/pet-food/3.jpg",
      "/assets/img/product/pet-food/4.jpg",
      "/assets/img/product/pet-food/5.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "117",
    "sku": "asdf231",
    "name": "Lorem ipsum pet food two",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 4,
    "saleCount": 15,
    "category": [
      "pet food"
    ],
    "tag": [
      "pet food"
    ],
    "stock": 25,
    "image": [
      "/assets/img/product/pet-food/2.jpg",
      "/assets/img/product/pet-food/3.jpg",
      "/assets/img/product/pet-food/4.jpg",
      "/assets/img/product/pet-food/5.jpg",
      "/assets/img/product/pet-food/6.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "118",
    "sku": "asdf232",
    "name": "Lorem ipsum pet food three",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 5,
    "saleCount": 30,
    "category": [
      "pet food"
    ],
    "tag": [
      "pet food"
    ],
    "stock": 10,
    "image": [
      "/assets/img/product/pet-food/3.jpg",
      "/assets/img/product/pet-food/4.jpg",
      "/assets/img/product/pet-food/5.jpg",
      "/assets/img/product/pet-food/6.jpg",
      "/assets/img/product/pet-food/7.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "119",
    "sku": "asdf233",
    "name": "Lorem ipsum pet food four",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 4,
    "saleCount": 14,
    "category": [
      "pet food"
    ],
    "tag": [
      "pet food"
    ],
    "stock": 10,
    "image": [
      "/assets/img/product/pet-food/4.jpg",
      "/assets/img/product/pet-food/5.jpg",
      "/assets/img/product/pet-food/6.jpg",
      "/assets/img/product/pet-food/7.jpg",
      "/assets/img/product/pet-food/8.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "120",
    "sku": "asdf234",
    "name": "Lorem ipsum pet food five",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 5,
    "saleCount": 30,
    "category": [
      "pet food"
    ],
    "tag": [
      "pet food"
    ],
    "stock": 40,
    "image": [
      "/assets/img/product/pet-food/5.jpg",
      "/assets/img/product/pet-food/6.jpg",
      "/assets/img/product/pet-food/7.jpg",
      "/assets/img/product/pet-food/8.jpg",
      "/assets/img/product/pet-food/1.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "121",
    "sku": "asdf235",
    "name": "Lorem ipsum pet food six",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 3,
    "saleCount": 30,
    "category": [
      "pet food"
    ],
    "tag": [
      "pet food"
    ],
    "stock": 25,
    "image": [
      "/assets/img/product/pet-food/6.jpg",
      "/assets/img/product/pet-food/7.jpg",
      "/assets/img/product/pet-food/8.jpg",
      "/assets/img/product/pet-food/1.jpg",
      "/assets/img/product/pet-food/2.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "122",
    "sku": "asdf236",
    "name": "Lorem ipsum pet food seven",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 3,
    "saleCount": 20,
    "category": [
      "pet food"
    ],
    "tag": [
      "pet food"
    ],
    "stock": 40,
    "image": [
      "/assets/img/product/pet-food/7.jpg",
      "/assets/img/product/pet-food/8.jpg",
      "/assets/img/product/pet-food/1.jpg",
      "/assets/img/product/pet-food/2.jpg",
      "/assets/img/product/pet-food/3.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "123",
    "sku": "asdf237",
    "name": "Lorem ipsum pet food eight",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 3,
    "saleCount": 20,
    "category": [
      "pet food"
    ],
    "tag": [
      "pet food"
    ],
    "stock": 60,
    "image": [
      "/assets/img/product/pet-food/8.jpg",
      "/assets/img/product/pet-food/1.jpg",
      "/assets/img/product/pet-food/2.jpg",
      "/assets/img/product/pet-food/3.jpg",
      "/assets/img/product/pet-food/4.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "124",
    "sku": "asdf238",
    "name": "Lorem ipsum medical one",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 5,
    "saleCount": 10,
    "category": [
      "medical"
    ],
    "tag": [
      "medical"
    ],
    "stock": 20,
    "image": [
      "/assets/img/product/medical/1.jpg",
      "/assets/img/product/medical/2.jpg",
      "/assets/img/product/medical/3.jpg",
      "/assets/img/product/medical/4.jpg",
      "/assets/img/product/medical/5.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "125",
    "sku": "asdf239",
    "name": "Lorem ipsum medical two",
    "price": 10000,
    "discount": 0,
    "new": true,
    "rating": 4,
    "saleCount": 15,
    "category": [
      "medical"
    ],
    "tag": [
      "medical"
    ],
    "stock": 25,
    "image": [
      "/assets/img/product/medical/2.jpg",
      "/assets/img/product/medical/3.jpg",
      "/assets/img/product/medical/4.jpg",
      "/assets/img/product/medical/5.jpg",
      "/assets/img/product/medical/6.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "126",
    "sku": "asdf240",
    "name": "Lorem ipsum medical three",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 5,
    "saleCount": 30,
    "category": [
      "medical"
    ],
    "tag": [
      "medical"
    ],
    "stock": 10,
    "image": [
      "/assets/img/product/medical/3.jpg",
      "/assets/img/product/medical/4.jpg",
      "/assets/img/product/medical/5.jpg",
      "/assets/img/product/medical/6.jpg",
      "/assets/img/product/medical/7.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "127",
    "sku": "asdf241",
    "name": "Lorem ipsum medical four",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 4,
    "saleCount": 14,
    "category": [
      "medical"
    ],
    "tag": [
      "medical"
    ],
    "stock": 10,
    "image": [
      "/assets/img/product/medical/4.jpg",
      "/assets/img/product/medical/5.jpg",
      "/assets/img/product/medical/6.jpg",
      "/assets/img/product/medical/7.jpg",
      "/assets/img/product/medical/8.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "128",
    "sku": "asdf242",
    "name": "Lorem ipsum medical five",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 5,
    "saleCount": 30,
    "category": [
      "medical"
    ],
    "tag": [
      "medical"
    ],
    "stock": 40,
    "image": [
      "/assets/img/product/medical/5.jpg",
      "/assets/img/product/medical/6.jpg",
      "/assets/img/product/medical/7.jpg",
      "/assets/img/product/medical/8.jpg",
      "/assets/img/product/medical/1.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "129",
    "sku": "asdf243",
    "name": "Lorem ipsum medical six",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 3,
    "saleCount": 30,
    "category": [
      "medical"
    ],
    "tag": [
      "medical"
    ],
    "stock": 25,
    "image": [
      "/assets/img/product/medical/6.jpg",
      "/assets/img/product/medical/7.jpg",
      "/assets/img/product/medical/8.jpg",
      "/assets/img/product/medical/1.jpg",
      "/assets/img/product/medical/2.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "130",
    "sku": "asdf244",
    "name": "Lorem ipsum medical seven",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 3,
    "saleCount": 20,
    "category": [
      "medical"
    ],
    "tag": [
      "medical"
    ],
    "stock": 40,
    "image": [
      "/assets/img/product/medical/7.jpg",
      "/assets/img/product/medical/8.jpg",
      "/assets/img/product/medical/1.jpg",
      "/assets/img/product/medical/2.jpg",
      "/assets/img/product/medical/3.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "131",
    "sku": "asdf245",
    "name": "Lorem ipsum medical eight",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 3,
    "saleCount": 20,
    "category": [
      "medical"
    ],
    "tag": [
      "medical"
    ],
    "stock": 60,
    "image": [
      "/assets/img/product/medical/8.jpg",
      "/assets/img/product/medical/1.jpg",
      "/assets/img/product/medical/2.jpg",
      "/assets/img/product/medical/3.jpg",
      "/assets/img/product/medical/4.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "132",
    "sku": "asdf246",
    "name": "Lorem ipsum black one",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 5,
    "saleCount": 10,
    "category": [
      "black friday"
    ],
    "tag": [
      "black friday"
    ],
    "stock": 20,
    "image": [
      "/assets/img/product/black-friday/1.jpg",
      "/assets/img/product/black-friday/2.jpg",
      "/assets/img/product/black-friday/3.jpg",
      "/assets/img/product/black-friday/4.jpg",
      "/assets/img/product/black-friday/5.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "133",
    "sku": "asdf247",
    "name": "Lorem ipsum black two",
    "price": 10000,
    "discount": 0,
    "new": true,
    "rating": 4,
    "saleCount": 15,
    "category": [
      "black friday"
    ],
    "tag": [
      "black friday"
    ],
    "stock": 25,
    "image": [
      "/assets/img/product/black-friday/2.jpg",
      "/assets/img/product/black-friday/3.jpg",
      "/assets/img/product/black-friday/4.jpg",
      "/assets/img/product/black-friday/5.jpg",
      "/assets/img/product/black-friday/6.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "134",
    "sku": "asdf248",
    "name": "Lorem ipsum black three",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 5,
    "saleCount": 30,
    "category": [
      "black friday"
    ],
    "tag": [
      "black friday"
    ],
    "stock": 10,
    "image": [
      "/assets/img/product/black-friday/3.jpg",
      "/assets/img/product/black-friday/4.jpg",
      "/assets/img/product/black-friday/5.jpg",
      "/assets/img/product/black-friday/6.jpg",
      "/assets/img/product/black-friday/7.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "135",
    "sku": "asdf249",
    "name": "Lorem ipsum black four",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 4,
    "saleCount": 14,
    "category": [
      "black friday"
    ],
    "tag": [
      "black friday"
    ],
    "stock": 10,
    "image": [
      "/assets/img/product/black-friday/4.jpg",
      "/assets/img/product/black-friday/5.jpg",
      "/assets/img/product/black-friday/6.jpg",
      "/assets/img/product/black-friday/7.jpg",
      "/assets/img/product/black-friday/8.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "136",
    "sku": "asdf250",
    "name": "Lorem ipsum black five",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 5,
    "saleCount": 30,
    "category": [
      "black friday"
    ],
    "tag": [
      "black friday"
    ],
    "stock": 40,
    "image": [
      "/assets/img/product/black-friday/5.jpg",
      "/assets/img/product/black-friday/6.jpg",
      "/assets/img/product/black-friday/7.jpg",
      "/assets/img/product/black-friday/8.jpg",
      "/assets/img/product/black-friday/1.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "137",
    "sku": "asdf251",
    "name": "Lorem ipsum black six",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 3,
    "saleCount": 30,
    "category": [
      "black friday"
    ],
    "tag": [
      "black friday"
    ],
    "stock": 25,
    "image": [
      "/assets/img/product/black-friday/6.jpg",
      "/assets/img/product/black-friday/7.jpg",
      "/assets/img/product/black-friday/8.jpg",
      "/assets/img/product/black-friday/1.jpg",
      "/assets/img/product/black-friday/2.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "138",
    "sku": "asdf252",
    "name": "Lorem ipsum black seven",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 3,
    "saleCount": 20,
    "category": [
      "black friday"
    ],
    "tag": [
      "black friday"
    ],
    "stock": 40,
    "image": [
      "/assets/img/product/black-friday/7.jpg",
      "/assets/img/product/black-friday/8.jpg",
      "/assets/img/product/black-friday/1.jpg",
      "/assets/img/product/black-friday/2.jpg",
      "/assets/img/product/black-friday/3.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "139",
    "sku": "asdf253",
    "name": "Lorem ipsum black eight",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 3,
    "saleCount": 20,
    "category": [
      "black friday"
    ],
    "tag": [
      "black friday"
    ],
    "stock": 60,
    "image": [
      "/assets/img/product/black-friday/8.jpg",
      "/assets/img/product/black-friday/1.jpg",
      "/assets/img/product/black-friday/2.jpg",
      "/assets/img/product/black-friday/3.jpg",
      "/assets/img/product/black-friday/4.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "140",
    "sku": "asdf249",
    "name": "Lorem ipsum christmas one",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 4,
    "saleCount": 14,
    "category": [
      "christmas"
    ],
    "tag": [
      "christmas"
    ],
    "stock": 10,
    "image": [
      "/assets/img/product/christmas/1.jpg",
      "/assets/img/product/christmas/2.jpg",
      "/assets/img/product/christmas/3.jpg",
      "/assets/img/product/christmas/4.jpg",
      "/assets/img/product/christmas/5.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "141",
    "sku": "asdf250",
    "name": "Lorem ipsum christmas two",
    "price": randomPrice(),
    "discount": 0,
    "new": false,
    "rating": 5,
    "saleCount": 30,
    "category": [
      "christmas"
    ],
    "tag": [
      "christmas"
    ],
    "stock": 40,
    "image": [
      "/assets/img/product/christmas/2.jpg",
      "/assets/img/product/christmas/3.jpg",
      "/assets/img/product/christmas/4.jpg",
      "/assets/img/product/christmas/5.jpg",
      "/assets/img/product/christmas/1.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "142",
    "sku": "asdf251",
    "name": "Lorem ipsum christmas three",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 3,
    "saleCount": 30,
    "category": [
      "christmas"
    ],
    "tag": [
      "christmas"
    ],
    "stock": 25,
    "image": [
      "/assets/img/product/christmas/3.jpg",
      "/assets/img/product/christmas/4.jpg",
      "/assets/img/product/christmas/5.jpg",
      "/assets/img/product/christmas/1.jpg",
      "/assets/img/product/christmas/2.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "143",
    "sku": "asdf252",
    "name": "Lorem ipsum christmas four",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 3,
    "saleCount": 20,
    "category": [
      "christmas"
    ],
    "tag": [
      "christmas"
    ],
    "stock": 40,
    "image": [
      "/assets/img/product/christmas/4.jpg",
      "/assets/img/product/christmas/5.jpg",
      "/assets/img/product/christmas/1.jpg",
      "/assets/img/product/christmas/2.jpg",
      "/assets/img/product/christmas/3.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "id": "144",
    "sku": "asdf253",
    "name": "Lorem ipsum christmas five",
    "price": randomPrice(),
    "discount": 0,
    "new": true,
    "rating": 3,
    "saleCount": 20,
    "category": [
      "christmas"
    ],
    "tag": [
      "christmas"
    ],
    "stock": 60,
    "image": [
      "/assets/img/product/christmas/5.jpg",
      "/assets/img/product/christmas/1.jpg",
      "/assets/img/product/christmas/2.jpg",
      "/assets/img/product/christmas/3.jpg",
      "/assets/img/product/christmas/4.jpg"
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  }
]