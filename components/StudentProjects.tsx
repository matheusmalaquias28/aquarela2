import { ImagePlaceholder } from "@/components/ImagePlaceholder";

type Project = {
  /** Caminho da imagem do projeto (deixe vazio p/ usar placeholder). */
  src?: string;
  /** Avatar do aluno(a). */
  avatar: string;
  alt: string;
};

/* Avatares já existentes em /public. */
const AVATARS = [
  "/avatar-1.webp",
  "/avatar-2.webp",
  "/avatar-3.webp",
  "/avatar-4.webp",
  "/avatar-5.webp",
];

/* Projetos exibidos no grid.
   Salve as imagens em /public com estes nomes. */
const PROJECTS: Project[] = [
  { src: "/projeto-floresta-tulipas.webp", avatar: AVATARS[0], alt: "Floresta ao amanhecer com tulipas" },
  { src: "/projeto-veleiro.webp", avatar: AVATARS[1], alt: "Veleiro no pôr do sol" },
  { src: "/projeto-ipanema.webp", avatar: AVATARS[2], alt: "Praia de Ipanema com coqueiros" },
  { src: "/projeto-mirante.webp", avatar: AVATARS[3], alt: "Mirante à beira-mar" },
  { src: "/projeto-igreja.webp", avatar: AVATARS[4], alt: "Igreja branca" },
];

/* Card individual com avatar do aluno(a) sobreposto no canto inferior esquerdo. */
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="relative block w-full">
      {/* Imagem maior — overflow-hidden fica só aqui p/ não recortar o avatar */}
      <div className="relative w-full overflow-hidden rounded-[16px]">
        {project.src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.src}
            alt={project.alt}
            loading="lazy"
            decoding="async"
            className="aspect-square w-full object-cover"
          />
        ) : (
          <ImagePlaceholder alt={project.alt} width={1} height={1} className="aspect-square w-full" />
        )}
      </div>

      {/* Avatar do aluno(a) — ultrapassa a imagem maior */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.avatar}
        alt=""
        width={39}
        height={39}
        loading="lazy"
        className="absolute bottom-[-8px] left-[16px] size-[39px] rounded-full object-cover ring-4 ring-white"
      />
    </div>
  );
}

export function StudentProjects() {
  return (
    <section className="mx-auto flex w-full max-w-[480px] flex-col gap-[14px] px-[10px] py-[30px] lg:max-w-[640px]">
      <p className="text-[13px] text-muted">Projetos dos aluno(a)s</p>

      <div className="grid grid-cols-2 gap-[16px]">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  );
}
