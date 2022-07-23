// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  res.status(200).json([
    {
      sku: 8,
      title: "Home & Toys 1",
      price: 150,
      qty_st: 2,
      category: "forHome",
      tag: "toy",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
      add_info: "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor",
      val: 4,
      images: {
        img1: "http://localhost:3000/img/for_home/for-home-1-580x870.jpg",
        img2: "http://localhost:3000/img/for_home/for-home-1-1-580x870.jpg",
      }
    },
    {
      sku: 0,
      title: "Boys 1",
      price: 100,
      qty_st: 3,
      category: "forBoys",
      tag: "boys",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
      add_info: "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor",
      val: 4.5,
      images: {
        img1: "http://localhost:3000/img/for_boys/boys-1-1-580x870.jpg",
        img2: "http://localhost:3000/img/for_boys/boys-1-580x870(1).jpg",
        img3: "http://localhost:3000/img/for_boys/boys-1-580x870.jpg",
      }
    },
    {
      sku: 4,
      title: "Girls 2",
      price: 100,
      qty_st: 3,
      category: "forGirls",
      tag: "girls",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
      add_info: "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor",
      val: 4.5,
      images: {
        img1: "http://localhost:3000/img/for_girls/girls-2-2-580x870.jpg",
        img2: "http://localhost:3000/img/for_girls/girls-2-3-580x870.jpg",
      }
    },
    {
      sku: 1,
      title: "Boys 2",
      price: 100,
      qty_st: 3,
      category: "forBoys",
      tag: "boys",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
      add_info: "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor",
      val: 4.5,
      images: {
        img1: "http://localhost:3000/img/for_boys/boys-2-1-580x870.jpg",
        img2: "http://localhost:3000/img/for_boys/boys-2-580x870(1).jpg",
        img3: "http://localhost:3000/img/for_boys/boys-2-580x870.jpg",
      }
    },
    {
      sku: 2,
      title: "Boys 3",
      price: 320,
      qty_st: 2,
      category: "forBoys",
      tag: "boys",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
      add_info: "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor",
      val: 4.5,
      images: {
        img1: "http://localhost:3000/img/for_boys/boys-3-1-580x870.jpg",
        img2: "http://localhost:3000/img/for_boys/boys-3-580x870(1).jpg",
        img3: "http://localhost:3000/img/for_boys/boys-3-580x870.jpg",
      }
    },
    {
      sku: 3,
      title: "Girls 1",
      price: 100,
      qty_st: 3,
      category: "forGirls",
      tag: "girls",
      description: "Test 2",
      add_info: "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor",
      val: 4.5,
      images: {
        img1: "http://localhost:3000/img/for_girls/girls-1-1-580x870.jpg",
        img2: "http://localhost:3000/img/for_girls/girls-1-2-580x870.jpg",
      }
    },
    {
      sku: 5,
      title: "Girls 3",
      price: 150,
      qty_st: 2,
      category: "forGirls",
      tag: "girls",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
      add_info: "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor",
      val: 4,
      images: {
        img1: "http://localhost:3000/img/for_girls/girls-3-1-580x870.jpg",
        img2: "http://localhost:3000/img/for_girls/girls-3-2-580x870.jpg",
      }
    },
    {
      sku: 6,
      title: "Babies 1",
      price: 100,
      qty_st: 3,
      category: "forBabies",
      tag: "girls",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
      add_info: "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor",
      val: 4.5,
      images: {
        img1: "http://localhost:3000/img/for_babies/for-babies-1-580x870.jpg",
        img2: "http://localhost:3000/img/for_babies/for-babies-1-1-580x870.jpg",
      }
    },
    {
      sku: 7,
      title: "Babies 2",
      price: 150,
      qty_st: 2,
      category: "forBabies",
      tag: "girls",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
      add_info: "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor",
      val: 4,
      images: {
        img1: "http://localhost:3000/img/for_babies/for-babies-2-580x870.jpg",
        img2: "http://localhost:3000/img/for_babies/for-babies-2-1-580x870.jpg",
      }
    },

  ]);
}
