interface Image {
    asset:{ url: string }
}

export interface Creator {
    _id: string
    name: string
    address: string
    slug:{ Current: string }
    image: Image
    bio: string
}

export interface Collection {
    _id: string
    title: string
    description: string
    nftCollectionName: string
    address: string
    slug:{ Current: string }
    creator: Creator
    mainImage: Image
    previewImage: Image
}