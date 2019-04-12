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
export const onUpdateFilm = `subscription OnUpdateFilm {
  onUpdateFilm {
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
export const onDeleteFilm = `subscription OnDeleteFilm {
  onDeleteFilm {
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
export const onCreateCamera = `subscription OnCreateCamera {
  onCreateCamera {
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
export const onUpdateCamera = `subscription OnUpdateCamera {
  onUpdateCamera {
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
export const onDeleteCamera = `subscription OnDeleteCamera {
  onDeleteCamera {
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
export const onCreateFilmStock = `subscription OnCreateFilmStock {
  onCreateFilmStock {
    filmBrand
    type
    size
    expiryDate
  }
}
`;
export const onUpdateFilmStock = `subscription OnUpdateFilmStock {
  onUpdateFilmStock {
    filmBrand
    type
    size
    expiryDate
  }
}
`;
export const onDeleteFilmStock = `subscription OnDeleteFilmStock {
  onDeleteFilmStock {
    filmBrand
    type
    size
    expiryDate
  }
}
`;
