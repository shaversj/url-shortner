import UrlCard from './UrlCard';
import { UrlObject } from '../types/types';

export default function UrlCardList({ urls }: { urls: UrlObject[] }) {
  return <div className={'space-y-4'}>{urls && urls.map((url: any, index: number) => <UrlCard key={index} url={url} />)}</div>;
}
