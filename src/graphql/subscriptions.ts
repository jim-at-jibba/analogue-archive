// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateFilm = `subscription OnCreateFilm {
  onCreateFilm {
    id
    filmNumber
    camera {
      id
      brand
      model
    }
    film {
      id
      filmBrand
      type
      size
      expiryDate
      quantity
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
  }
}
`;
export const onUpdateFilm = `subscription OnUpdateFilm {
  onUpdateFilm {
    id
    filmNumber
    camera {
      id
      brand
      model
    }
    film {
      id
      filmBrand
      type
      size
      expiryDate
      quantity
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
  }
}
`;
export const onDeleteFilm = `subscription OnDeleteFilm {
  onDeleteFilm {
    id
    filmNumber
    camera {
      id
      brand
      model
    }
    film {
      id
      filmBrand
      type
      size
      expiryDate
      quantity
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
  }
}
`;
export const onCreateCamera = `subscription OnCreateCamera {
  onCreateCamera {
    id
    brand
    model
  }
}
`;
export const onUpdateCamera = `subscription OnUpdateCamera {
  onUpdateCamera {
    id
    brand
    model
  }
}
`;
export const onDeleteCamera = `subscription OnDeleteCamera {
  onDeleteCamera {
    id
    brand
    model
  }
}
`;
export const onCreateFrame = `subscription OnCreateFrame {
  onCreateFrame {
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
        id
        filmBrand
        type
        size
        expiryDate
        quantity
      }
      frames {
        nextToken
      }
      inCameraDate
      outCameraDate
      processedWhere
      processedHow
      processedDate
    }
  }
}
`;
export const onUpdateFrame = `subscription OnUpdateFrame {
  onUpdateFrame {
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
        id
        filmBrand
        type
        size
        expiryDate
        quantity
      }
      frames {
        nextToken
      }
      inCameraDate
      outCameraDate
      processedWhere
      processedHow
      processedDate
    }
  }
}
`;
export const onDeleteFrame = `subscription OnDeleteFrame {
  onDeleteFrame {
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
        id
        filmBrand
        type
        size
        expiryDate
        quantity
      }
      frames {
        nextToken
      }
      inCameraDate
      outCameraDate
      processedWhere
      processedHow
      processedDate
    }
  }
}
`;
export const onCreateFilmStock = `subscription OnCreateFilmStock {
  onCreateFilmStock {
    id
    filmBrand
    type
    size
    expiryDate
    quantity
  }
}
`;
export const onUpdateFilmStock = `subscription OnUpdateFilmStock {
  onUpdateFilmStock {
    id
    filmBrand
    type
    size
    expiryDate
    quantity
  }
}
`;
export const onDeleteFilmStock = `subscription OnDeleteFilmStock {
  onDeleteFilmStock {
    id
    filmBrand
    type
    size
    expiryDate
    quantity
  }
}
`;
