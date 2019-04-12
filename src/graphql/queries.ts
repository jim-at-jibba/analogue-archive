// tslint:disable
// this is an auto generated file. This will be overwritten

export const getFilm = `query GetFilm($id: ID!) {
  getFilm(id: $id) {
    id
    filmNumber
    camera {
      id
      brand
      model
      film {
        id
        filmNumber
        inCameraDate
        outCameraDate
        processedWhere
        processedHow
        processedDate
        name
      }
    }
    film {
      filmBrand
      type
      size
      expiryDate
    }
    frames {
      items {
        id
        captureDate
        aperture
        shutterSpeed
        description
      }
      nextToken
    }
    inCameraDate
    outCameraDate
    processedWhere
    processedHow
    processedDate
    name
  }
}
`;
export const listFilms = `query ListFilms(
  $filter: ModelFilmFilterInput
  $limit: Int
  $nextToken: String
) {
  listFilms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      filmNumber
      camera {
        id
        brand
        model
      }
      film {
        filmBrand
        type
        size
        expiryDate
      }
      frames {
        nextToken
      }
      inCameraDate
      outCameraDate
      processedWhere
      processedHow
      processedDate
      name
    }
    nextToken
  }
}
`;
export const getCamera = `query GetCamera($id: ID!) {
  getCamera(id: $id) {
    id
    brand
    model
    film {
      id
      filmNumber
      camera {
        id
        brand
        model
      }
      film {
        filmBrand
        type
        size
        expiryDate
      }
      frames {
        nextToken
      }
      inCameraDate
      outCameraDate
      processedWhere
      processedHow
      processedDate
      name
    }
  }
}
`;
export const listCameras = `query ListCameras(
  $filter: ModelCameraFilterInput
  $limit: Int
  $nextToken: String
) {
  listCameras(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      brand
      model
      film {
        id
        filmNumber
        inCameraDate
        outCameraDate
        processedWhere
        processedHow
        processedDate
        name
      }
    }
    nextToken
  }
}
`;
export const getFrame = `query GetFrame($id: ID!) {
  getFrame(id: $id) {
    id
    captureDate
    aperture
    shutterSpeed
    description
    film {
      id
      filmNumber
      camera {
        id
        brand
        model
      }
      film {
        filmBrand
        type
        size
        expiryDate
      }
      frames {
        nextToken
      }
      inCameraDate
      outCameraDate
      processedWhere
      processedHow
      processedDate
      name
    }
  }
}
`;
export const listFrames = `query ListFrames(
  $filter: ModelFrameFilterInput
  $limit: Int
  $nextToken: String
) {
  listFrames(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      captureDate
      aperture
      shutterSpeed
      description
      film {
        id
        filmNumber
        inCameraDate
        outCameraDate
        processedWhere
        processedHow
        processedDate
        name
      }
    }
    nextToken
  }
}
`;
export const getFilmStock = `query GetFilmStock($id: ID!) {
  getFilmStock(id: $id) {
    filmBrand
    type
    size
    expiryDate
  }
}
`;
export const listFilmStocks = `query ListFilmStocks(
  $filter: ModelFilmStockFilterInput
  $limit: Int
  $nextToken: String
) {
  listFilmStocks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      filmBrand
      type
      size
      expiryDate
    }
    nextToken
  }
}
`;
