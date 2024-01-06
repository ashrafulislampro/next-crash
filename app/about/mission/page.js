import CustomButton from "@/app/components/customButton";
import thumb from "@/public/image/screen2.png";
import Image from "next/image";

export default function Mission() {
  return (
    <main className="mt-10">
      <p>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          libero deserunt dignissimos. Eaque voluptatibus itaque officia
          adipisci mollitia obcaecati fugiat quibusdam. Odio nesciunt,
          perspiciatis ullam repellat mollitia vel non quibusdam.
        </span>
        <span>
          Quisquam, totam. Omnis commodi debitis sed voluptatum consequatur, est
          accusantium recusandae magnam vero molestiae! Quis dolor tenetur nemo
          veritatis aliquam aliquid quibusdam, nesciunt voluptatibus facere
          eius, iste id minima qui!
        </span>
        <span>
          Consectetur voluptates iste, beatae exercitationem nisi rem atque
          commodi magnam molestias natus quisquam praesentium, tenetur
          temporibus ab delectus enim quam cupiditate? Eius ratione corrupti
          neque nisi saepe ullam veniam optio.
        </span>
        <span>
          Omnis perspiciatis nisi, incidunt aliquid error nostrum corrupti est
          vel nesciunt repudiandae illo esse ducimus minima, alias quidem
          officia rem. Quod omnis sapiente aliquam? Adipisci dicta repellendus
          praesentium ipsam eligendi.
        </span>
        <span>
          Error repellat ducimus repellendus dolor saepe suscipit facilis sunt
          totam rerum magni facere animi in sit architecto excepturi, quidem
          soluta est ipsa autem! Inventore perspiciatis, temporibus delectus id
          voluptatum possimus!
        </span>
        <span>
          Natus, quibusdam tempore. Iusto velit blanditiis repellat dolor
          exercitationem perferendis unde! Molestias rerum voluptatum similique,
          ratione amet harum iusto eaque illum unde sit nobis, voluptatem
          perferendis quidem maiores, necessitatibus quibusdam.
        </span>
        <span>
          Deleniti, temporibus et, dolorem ipsa sapiente cumque dicta
          consequatur voluptatem quo impedit aut ut deserunt beatae
          reprehenderit pariatur sunt quas vel perferendis voluptates voluptas
          corrupti. Voluptas voluptates impedit molestiae eligendi.
        </span>
      </p>
      <div className="w-[500px]">
        <Image placeholder="blur" src={thumb} alt="thumb image" />
      </div>

      <CustomButton />
    </main>
  );
}
