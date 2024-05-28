import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
// import Comments from "@/components/comments/Comments";



// const getData = async (slug) => {
//   const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };


const SinglePage = async ({ params }) => {
  // const { slug } = params;

  // const data = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          <div className={styles.user}>
              <div className={styles.userImageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
              </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            // dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quidem quibusdam provident corporis rem tempore temporibus blanditiis doloremque molestias aut voluptates odit velit voluptas repudiandae harum, commodi officia consectetur nostrum quis! Temporibus, culpa consectetur. Ut at recusandae quibusdam nostrum harum quod, esse animi veniam hic autem veritatis explicabo perspiciatis perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem! Quasi autem animi libero in delectus hic, tempora harum quas, omnis officiis nobis debitis provident assumenda facere illum. Nostrum, consequatur odio ipsum numquam autem sit pariatur asperiores ab cupiditate corporis magni, odit quam eius dignissimos nam saepe, alias enim ex dolorem iure accusantium? Rerum, aspernatur quis eaque impedit maiores distinctio ad officiis provident dolorum corporis pariatur earum dicta assumenda ut voluptatum ducimus. Corrupti, quasi voluptatem. Excepturi asperiores cum temporibus voluptate tenetur velit deleniti expedita dignissimos voluptatum ad aliquam doloremque ratione atque voluptatem blanditiis, quibusdam dolores laudantium nemo. Error rem iure, quasi dolorem mollitia itaque! Quos molestias sint odio eveniet sed dolorum vero dolorem facilis magnam officia nihil quaerat, velit quam ex, vel esse! Necessitatibus, magni nesciunt eos cupiditate recusandae omnis a exercitationem nostrum provident, voluptatum in, nam eum labore sunt fuga? Explicabo nobis laudantium quidem, dolorem esse ut unde doloremque sit veritatis sed asperiores nisi eveniet ipsa in ratione enim non exercitationem odit officiis dignissimos reprehenderit minima! Veniam animi nemo sit. Vitae labore placeat dolor porro facere aspernatur, quisquam soluta aut deleniti natus molestias obcaecati itaque quas, veniam est magni provident ducimus. Nobis provident in ducimus temporibus necessitatibus eius dolores.
          <div className={styles.comment}>
            {/* <Comments postSlug={slug}/> */}
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;