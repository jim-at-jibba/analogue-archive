// tslint:disable
// this is an auto generated file. This will be overwritten

export const createFilm = `mutation CreateFilm($input: CreateFilmInput!) {
  createFilm(input: $input) {
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
export const updateFilm = `mutation UpdateFilm($input: UpdateFilmInput!) {
  updateFilm(input: $input) {
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
export const deleteFilm = `mutation DeleteFilm($input: DeleteFilmInput!) {
  deleteFilm(input: $input) {
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
export const createCamera = `mutation CreateCamera($input: CreateCameraInput!) {
  createCamera(input: $input) {
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
export const updateCamera = `mutation UpdateCamera($input: UpdateCameraInput!) {
  updateCamera(input: $input) {
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
export const deleteCamera = `mutation DeleteCamera($input: DeleteCameraInput!) {
  deleteCamera(input: $input) {
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
export const createFrame = `mutation CreateFrame($input: CreateFrameInput!) {
  createFrame(input: $input) {
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
export const updateFrame = `mutation UpdateFrame($input: UpdateFrameInput!) {
  updateFrame(input: $input) {
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
export const deleteFrame = `mutation DeleteFrame($input: DeleteFrameInput!) {
  deleteFrame(input: $input) {
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
export const createFilmStock = `mutation CreateFilmStock($input: CreateFilmStockInput!) {
  createFilmStock(input: $input) {
    filmBrand
    type
    size
    expiryDate
  }
}
`;
export const updateFilmStock = `mutation UpdateFilmStock($input: UpdateFilmStockInput!) {
  updateFilmStock(input: $input) {
    filmBrand
    type
    size
    expiryDate
  }
}
`;
export const deleteFilmStock = `mutation DeleteFilmStock($input: DeleteFilmStockInput!) {
  deleteFilmStock(input: $input) {
    filmBrand
    type
    size
    expiryDate
  }
}
`;
