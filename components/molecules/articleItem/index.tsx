import Image from 'next/image';
import Link from 'next/link';

export interface ArticleItemProps {
  title: string;
  category: string;
  image: string;
  description: string;
  href: string;
  id: string;
}

export default function ArticleItem(props: Partial<ArticleItemProps>) {
  const { title, image, href = '/', id, description, category } = props;
  return (
    <div className="col-lg-4">
      <div className="card">
        <img src={image} width={344} height={240} className="card-img-top" alt={title} />
        <div className="card-body">
          <h4 className="card-title text-lg fw-medium color-palette-1 mb-15">{title}</h4>
          <h5 className="card-text text-sm color-palette-2 mb-4">{category}</h5>
          <p className="card-text text-sm color-palette-2 mb-0">{description}</p>
          {/* baca selengkapnya button */}
          <Link legacyBehavior href={href}>
            <a className="btn btn-block btn-article fw-medium text-sm color-palette-1 text-decoration-none pt-12 pb-12">
              Baca Selengkapnya
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
