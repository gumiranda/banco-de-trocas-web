export type ImovelProps = {
  _id: string;
  name: string;
  description: string;
  city: string;
  cityLabel: string;
  uf: string;
  slug: string;
  photos: any;
  createdAt: string;
  value?: boolean;
  active?: boolean;
};

class Imovel {
  protected props: ImovelProps;
  constructor(props: ImovelProps) {
    this.props = props;
  }
  public static build(props: ImovelProps) {
    return new Imovel(props);
  }
  get _id(): string {
    return this.props._id;
  }
  get name(): string {
    return this.props.name;
  }
  get createdAt(): string {
    return this.props.createdAt;
  }
  get active(): boolean | undefined {
    return this.props.active;
  }
  get description(): string {
    return this.props.description;
  }
  get city(): string {
    return this.props.city;
  }
  get uf(): string {
    return this.props.uf;
  }
  get cityLabel(): string {
    return this.props.cityLabel;
  }
  get slug(): string {
    return this.props.slug;
  }
  get photos(): any {
    return this.props.photos;
  }

  format(): ImovelProps {
    return {
      ...this.props,
      _id: this.props._id,
      name: this.props.name,
      active: this.props.active,
      value: false,
      createdAt: new Date(this.props.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
    };
  }
}
export const imovelModel = (props: ImovelProps) => Imovel.build(props);
