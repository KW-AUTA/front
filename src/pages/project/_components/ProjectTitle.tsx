import ProjectIcon from '@/assets/icons/project.svg';

export default function ProjectTitle() {
  return (
    <h1 className="flex gap-4 items-center pl-4 pb-5">
      <img src={ProjectIcon} alt="project icon" />
      <span className="font-bm text-20 max-md:text-16">프로젝트 관리</span>
    </h1>
  );
}
