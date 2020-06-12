const initialState = {
  loading: false,
  products: [
    {
      id: 1,
      name: "item_1",
      description: "description_1",
      price: 43,
      imageUrl: "image_Url_1",
      categoryId: 1,
    },
    {
      id: 2,
      name: "item_2",
      description: "description_2",
      price: 23,
      imageUrl: "image_Url_2",
      categoryId: 2,
    },
    {
      id: 3,
      name: "item_3",
      description: "description_3",
      price: 44,
      imageUrl: "image_Url_3",
      categoryId: 1,
    },
  ],
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "products/Loading": {
      return {
        ...state,
        loading: true,
      };
    }
    case "products/Fetched": {
      return {
        loading: false,
        posts: [...state.posts, ...action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
