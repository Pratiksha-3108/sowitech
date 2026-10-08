import { notFound } from 'next/navigation';
import { projectsDatabase } from '../../data/projectsData';
import ProjectDetailClient from './ProjectDetailClient';

export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(projectsDatabase).map((id) => ({
    id,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projectsDatabase[id] || projectsDatabase['ntpc-dadri-tertiary'];

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
