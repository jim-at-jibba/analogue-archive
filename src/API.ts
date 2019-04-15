/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateFilmInput = {
  id?: string | null,
  filmNumber?: number | null,
  inCameraDate: string,
  outCameraDate?: string | null,
  processedWhere?: string | null,
  processedHow?: string | null,
  processedDate?: string | null,
};

export enum FilmSize {
  THIRTYFIVE = "THIRTYFIVE",
  ONETWENTY = "ONETWENTY",
  FOURBYFIVE = "FOURBYFIVE",
  EIGHTBYFIVE = "EIGHTBYFIVE",
}


export type UpdateFilmInput = {
  id: string,
  filmNumber?: number | null,
  inCameraDate?: string | null,
  outCameraDate?: string | null,
  processedWhere?: string | null,
  processedHow?: string | null,
  processedDate?: string | null,
};

export type DeleteFilmInput = {
  id?: string | null,
};

export type CreateCameraInput = {
  id?: string | null,
  brand: string,
  model: string,
};

export type UpdateCameraInput = {
  id: string,
  brand?: string | null,
  model?: string | null,
};

export type DeleteCameraInput = {
  id?: string | null,
};

export type CreateFrameInput = {
  id?: string | null,
  captureDate: string,
  aperture?: string | null,
  shutterSpeed?: string | null,
  description?: string | null,
  frameFilmId?: string | null,
};

export type UpdateFrameInput = {
  id: string,
  captureDate?: string | null,
  aperture?: string | null,
  shutterSpeed?: string | null,
  description?: string | null,
  frameFilmId?: string | null,
};

export type DeleteFrameInput = {
  id?: string | null,
};

export type CreateFilmStockInput = {
  id?: string | null,
  filmBrand: string,
  type?: string | null,
  size?: FilmSize | null,
  expiryDate: string,
  quantity?: number | null,
};

export type UpdateFilmStockInput = {
  id: string,
  filmBrand?: string | null,
  type?: string | null,
  size?: FilmSize | null,
  expiryDate?: string | null,
  quantity?: number | null,
};

export type DeleteFilmStockInput = {
  id?: string | null,
};

export type ModelFilmFilterInput = {
  id?: ModelIDFilterInput | null,
  filmNumber?: ModelIntFilterInput | null,
  inCameraDate?: ModelStringFilterInput | null,
  outCameraDate?: ModelStringFilterInput | null,
  processedWhere?: ModelStringFilterInput | null,
  processedHow?: ModelStringFilterInput | null,
  processedDate?: ModelStringFilterInput | null,
  and?: Array< ModelFilmFilterInput | null > | null,
  or?: Array< ModelFilmFilterInput | null > | null,
  not?: ModelFilmFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelCameraFilterInput = {
  id?: ModelIDFilterInput | null,
  brand?: ModelStringFilterInput | null,
  model?: ModelStringFilterInput | null,
  and?: Array< ModelCameraFilterInput | null > | null,
  or?: Array< ModelCameraFilterInput | null > | null,
  not?: ModelCameraFilterInput | null,
};

export type ModelFrameFilterInput = {
  id?: ModelIDFilterInput | null,
  captureDate?: ModelStringFilterInput | null,
  aperture?: ModelStringFilterInput | null,
  shutterSpeed?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  and?: Array< ModelFrameFilterInput | null > | null,
  or?: Array< ModelFrameFilterInput | null > | null,
  not?: ModelFrameFilterInput | null,
};

export type ModelFilmStockFilterInput = {
  id?: ModelIDFilterInput | null,
  filmBrand?: ModelStringFilterInput | null,
  type?: ModelStringFilterInput | null,
  size?: ModelFilmSizeFilterInput | null,
  expiryDate?: ModelStringFilterInput | null,
  quantity?: ModelIntFilterInput | null,
  and?: Array< ModelFilmStockFilterInput | null > | null,
  or?: Array< ModelFilmStockFilterInput | null > | null,
  not?: ModelFilmStockFilterInput | null,
};

export type ModelFilmSizeFilterInput = {
  eq?: FilmSize | null,
  ne?: FilmSize | null,
};

export type CreateFilmMutationVariables = {
  input: CreateFilmInput,
};

export type CreateFilmMutation = {
  createFilm:  {
    __typename: "Film",
    id: string,
    filmNumber: number | null,
    camera:  {
      __typename: "Camera",
      id: string,
      brand: string,
      model: string,
    } | null,
    film:  {
      __typename: "FilmStock",
      id: string,
      filmBrand: string,
      type: string | null,
      size: FilmSize | null,
      expiryDate: string,
      quantity: number | null,
    } | null,
    frames:  {
      __typename: "ModelFrameConnection",
      items:  Array< {
        __typename: "Frame",
        id: string,
        captureDate: string,
        aperture: string | null,
        shutterSpeed: string | null,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    inCameraDate: string,
    outCameraDate: string | null,
    processedWhere: string | null,
    processedHow: string | null,
    processedDate: string | null,
  } | null,
};

export type UpdateFilmMutationVariables = {
  input: UpdateFilmInput,
};

export type UpdateFilmMutation = {
  updateFilm:  {
    __typename: "Film",
    id: string,
    filmNumber: number | null,
    camera:  {
      __typename: "Camera",
      id: string,
      brand: string,
      model: string,
    } | null,
    film:  {
      __typename: "FilmStock",
      id: string,
      filmBrand: string,
      type: string | null,
      size: FilmSize | null,
      expiryDate: string,
      quantity: number | null,
    } | null,
    frames:  {
      __typename: "ModelFrameConnection",
      items:  Array< {
        __typename: "Frame",
        id: string,
        captureDate: string,
        aperture: string | null,
        shutterSpeed: string | null,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    inCameraDate: string,
    outCameraDate: string | null,
    processedWhere: string | null,
    processedHow: string | null,
    processedDate: string | null,
  } | null,
};

export type DeleteFilmMutationVariables = {
  input: DeleteFilmInput,
};

export type DeleteFilmMutation = {
  deleteFilm:  {
    __typename: "Film",
    id: string,
    filmNumber: number | null,
    camera:  {
      __typename: "Camera",
      id: string,
      brand: string,
      model: string,
    } | null,
    film:  {
      __typename: "FilmStock",
      id: string,
      filmBrand: string,
      type: string | null,
      size: FilmSize | null,
      expiryDate: string,
      quantity: number | null,
    } | null,
    frames:  {
      __typename: "ModelFrameConnection",
      items:  Array< {
        __typename: "Frame",
        id: string,
        captureDate: string,
        aperture: string | null,
        shutterSpeed: string | null,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    inCameraDate: string,
    outCameraDate: string | null,
    processedWhere: string | null,
    processedHow: string | null,
    processedDate: string | null,
  } | null,
};

export type CreateCameraMutationVariables = {
  input: CreateCameraInput,
};

export type CreateCameraMutation = {
  createCamera:  {
    __typename: "Camera",
    id: string,
    brand: string,
    model: string,
  } | null,
};

export type UpdateCameraMutationVariables = {
  input: UpdateCameraInput,
};

export type UpdateCameraMutation = {
  updateCamera:  {
    __typename: "Camera",
    id: string,
    brand: string,
    model: string,
  } | null,
};

export type DeleteCameraMutationVariables = {
  input: DeleteCameraInput,
};

export type DeleteCameraMutation = {
  deleteCamera:  {
    __typename: "Camera",
    id: string,
    brand: string,
    model: string,
  } | null,
};

export type CreateFrameMutationVariables = {
  input: CreateFrameInput,
};

export type CreateFrameMutation = {
  createFrame:  {
    __typename: "Frame",
    id: string,
    captureDate: string,
    aperture: string | null,
    shutterSpeed: string | null,
    description: string | null,
    film:  {
      __typename: "Film",
      id: string,
      filmNumber: number | null,
      camera:  {
        __typename: "Camera",
        id: string,
        brand: string,
        model: string,
      } | null,
      film:  {
        __typename: "FilmStock",
        id: string,
        filmBrand: string,
        type: string | null,
        size: FilmSize | null,
        expiryDate: string,
        quantity: number | null,
      } | null,
      frames:  {
        __typename: "ModelFrameConnection",
        nextToken: string | null,
      } | null,
      inCameraDate: string,
      outCameraDate: string | null,
      processedWhere: string | null,
      processedHow: string | null,
      processedDate: string | null,
    } | null,
  } | null,
};

export type UpdateFrameMutationVariables = {
  input: UpdateFrameInput,
};

export type UpdateFrameMutation = {
  updateFrame:  {
    __typename: "Frame",
    id: string,
    captureDate: string,
    aperture: string | null,
    shutterSpeed: string | null,
    description: string | null,
    film:  {
      __typename: "Film",
      id: string,
      filmNumber: number | null,
      camera:  {
        __typename: "Camera",
        id: string,
        brand: string,
        model: string,
      } | null,
      film:  {
        __typename: "FilmStock",
        id: string,
        filmBrand: string,
        type: string | null,
        size: FilmSize | null,
        expiryDate: string,
        quantity: number | null,
      } | null,
      frames:  {
        __typename: "ModelFrameConnection",
        nextToken: string | null,
      } | null,
      inCameraDate: string,
      outCameraDate: string | null,
      processedWhere: string | null,
      processedHow: string | null,
      processedDate: string | null,
    } | null,
  } | null,
};

export type DeleteFrameMutationVariables = {
  input: DeleteFrameInput,
};

export type DeleteFrameMutation = {
  deleteFrame:  {
    __typename: "Frame",
    id: string,
    captureDate: string,
    aperture: string | null,
    shutterSpeed: string | null,
    description: string | null,
    film:  {
      __typename: "Film",
      id: string,
      filmNumber: number | null,
      camera:  {
        __typename: "Camera",
        id: string,
        brand: string,
        model: string,
      } | null,
      film:  {
        __typename: "FilmStock",
        id: string,
        filmBrand: string,
        type: string | null,
        size: FilmSize | null,
        expiryDate: string,
        quantity: number | null,
      } | null,
      frames:  {
        __typename: "ModelFrameConnection",
        nextToken: string | null,
      } | null,
      inCameraDate: string,
      outCameraDate: string | null,
      processedWhere: string | null,
      processedHow: string | null,
      processedDate: string | null,
    } | null,
  } | null,
};

export type CreateFilmStockMutationVariables = {
  input: CreateFilmStockInput,
};

export type CreateFilmStockMutation = {
  createFilmStock:  {
    __typename: "FilmStock",
    id: string,
    filmBrand: string,
    type: string | null,
    size: FilmSize | null,
    expiryDate: string,
    quantity: number | null,
  } | null,
};

export type UpdateFilmStockMutationVariables = {
  input: UpdateFilmStockInput,
};

export type UpdateFilmStockMutation = {
  updateFilmStock:  {
    __typename: "FilmStock",
    id: string,
    filmBrand: string,
    type: string | null,
    size: FilmSize | null,
    expiryDate: string,
    quantity: number | null,
  } | null,
};

export type DeleteFilmStockMutationVariables = {
  input: DeleteFilmStockInput,
};

export type DeleteFilmStockMutation = {
  deleteFilmStock:  {
    __typename: "FilmStock",
    id: string,
    filmBrand: string,
    type: string | null,
    size: FilmSize | null,
    expiryDate: string,
    quantity: number | null,
  } | null,
};

export type GetFilmQueryVariables = {
  id: string,
};

export type GetFilmQuery = {
  getFilm:  {
    __typename: "Film",
    id: string,
    filmNumber: number | null,
    camera:  {
      __typename: "Camera",
      id: string,
      brand: string,
      model: string,
    } | null,
    film:  {
      __typename: "FilmStock",
      id: string,
      filmBrand: string,
      type: string | null,
      size: FilmSize | null,
      expiryDate: string,
      quantity: number | null,
    } | null,
    frames:  {
      __typename: "ModelFrameConnection",
      items:  Array< {
        __typename: "Frame",
        id: string,
        captureDate: string,
        aperture: string | null,
        shutterSpeed: string | null,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    inCameraDate: string,
    outCameraDate: string | null,
    processedWhere: string | null,
    processedHow: string | null,
    processedDate: string | null,
  } | null,
};

export type ListFilmsQueryVariables = {
  filter?: ModelFilmFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFilmsQuery = {
  listFilms:  {
    __typename: "ModelFilmConnection",
    items:  Array< {
      __typename: "Film",
      id: string,
      filmNumber: number | null,
      camera:  {
        __typename: "Camera",
        id: string,
        brand: string,
        model: string,
      } | null,
      film:  {
        __typename: "FilmStock",
        id: string,
        filmBrand: string,
        type: string | null,
        size: FilmSize | null,
        expiryDate: string,
        quantity: number | null,
      } | null,
      frames:  {
        __typename: "ModelFrameConnection",
        nextToken: string | null,
      } | null,
      inCameraDate: string,
      outCameraDate: string | null,
      processedWhere: string | null,
      processedHow: string | null,
      processedDate: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCameraQueryVariables = {
  id: string,
};

export type GetCameraQuery = {
  getCamera:  {
    __typename: "Camera",
    id: string,
    brand: string,
    model: string,
  } | null,
};

export type ListCamerasQueryVariables = {
  filter?: ModelCameraFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCamerasQuery = {
  listCameras:  {
    __typename: "ModelCameraConnection",
    items:  Array< {
      __typename: "Camera",
      id: string,
      brand: string,
      model: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetFrameQueryVariables = {
  id: string,
};

export type GetFrameQuery = {
  getFrame:  {
    __typename: "Frame",
    id: string,
    captureDate: string,
    aperture: string | null,
    shutterSpeed: string | null,
    description: string | null,
    film:  {
      __typename: "Film",
      id: string,
      filmNumber: number | null,
      camera:  {
        __typename: "Camera",
        id: string,
        brand: string,
        model: string,
      } | null,
      film:  {
        __typename: "FilmStock",
        id: string,
        filmBrand: string,
        type: string | null,
        size: FilmSize | null,
        expiryDate: string,
        quantity: number | null,
      } | null,
      frames:  {
        __typename: "ModelFrameConnection",
        nextToken: string | null,
      } | null,
      inCameraDate: string,
      outCameraDate: string | null,
      processedWhere: string | null,
      processedHow: string | null,
      processedDate: string | null,
    } | null,
  } | null,
};

export type ListFramesQueryVariables = {
  filter?: ModelFrameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFramesQuery = {
  listFrames:  {
    __typename: "ModelFrameConnection",
    items:  Array< {
      __typename: "Frame",
      id: string,
      captureDate: string,
      aperture: string | null,
      shutterSpeed: string | null,
      description: string | null,
      film:  {
        __typename: "Film",
        id: string,
        filmNumber: number | null,
        inCameraDate: string,
        outCameraDate: string | null,
        processedWhere: string | null,
        processedHow: string | null,
        processedDate: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetFilmStockQueryVariables = {
  id: string,
};

export type GetFilmStockQuery = {
  getFilmStock:  {
    __typename: "FilmStock",
    id: string,
    filmBrand: string,
    type: string | null,
    size: FilmSize | null,
    expiryDate: string,
    quantity: number | null,
  } | null,
};

export type ListFilmStocksQueryVariables = {
  filter?: ModelFilmStockFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFilmStocksQuery = {
  listFilmStocks:  {
    __typename: "ModelFilmStockConnection",
    items:  Array< {
      __typename: "FilmStock",
      id: string,
      filmBrand: string,
      type: string | null,
      size: FilmSize | null,
      expiryDate: string,
      quantity: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateFilmSubscription = {
  onCreateFilm:  {
    __typename: "Film",
    id: string,
    filmNumber: number | null,
    camera:  {
      __typename: "Camera",
      id: string,
      brand: string,
      model: string,
    } | null,
    film:  {
      __typename: "FilmStock",
      id: string,
      filmBrand: string,
      type: string | null,
      size: FilmSize | null,
      expiryDate: string,
      quantity: number | null,
    } | null,
    frames:  {
      __typename: "ModelFrameConnection",
      items:  Array< {
        __typename: "Frame",
        id: string,
        captureDate: string,
        aperture: string | null,
        shutterSpeed: string | null,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    inCameraDate: string,
    outCameraDate: string | null,
    processedWhere: string | null,
    processedHow: string | null,
    processedDate: string | null,
  } | null,
};

export type OnUpdateFilmSubscription = {
  onUpdateFilm:  {
    __typename: "Film",
    id: string,
    filmNumber: number | null,
    camera:  {
      __typename: "Camera",
      id: string,
      brand: string,
      model: string,
    } | null,
    film:  {
      __typename: "FilmStock",
      id: string,
      filmBrand: string,
      type: string | null,
      size: FilmSize | null,
      expiryDate: string,
      quantity: number | null,
    } | null,
    frames:  {
      __typename: "ModelFrameConnection",
      items:  Array< {
        __typename: "Frame",
        id: string,
        captureDate: string,
        aperture: string | null,
        shutterSpeed: string | null,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    inCameraDate: string,
    outCameraDate: string | null,
    processedWhere: string | null,
    processedHow: string | null,
    processedDate: string | null,
  } | null,
};

export type OnDeleteFilmSubscription = {
  onDeleteFilm:  {
    __typename: "Film",
    id: string,
    filmNumber: number | null,
    camera:  {
      __typename: "Camera",
      id: string,
      brand: string,
      model: string,
    } | null,
    film:  {
      __typename: "FilmStock",
      id: string,
      filmBrand: string,
      type: string | null,
      size: FilmSize | null,
      expiryDate: string,
      quantity: number | null,
    } | null,
    frames:  {
      __typename: "ModelFrameConnection",
      items:  Array< {
        __typename: "Frame",
        id: string,
        captureDate: string,
        aperture: string | null,
        shutterSpeed: string | null,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    inCameraDate: string,
    outCameraDate: string | null,
    processedWhere: string | null,
    processedHow: string | null,
    processedDate: string | null,
  } | null,
};

export type OnCreateCameraSubscription = {
  onCreateCamera:  {
    __typename: "Camera",
    id: string,
    brand: string,
    model: string,
  } | null,
};

export type OnUpdateCameraSubscription = {
  onUpdateCamera:  {
    __typename: "Camera",
    id: string,
    brand: string,
    model: string,
  } | null,
};

export type OnDeleteCameraSubscription = {
  onDeleteCamera:  {
    __typename: "Camera",
    id: string,
    brand: string,
    model: string,
  } | null,
};

export type OnCreateFrameSubscription = {
  onCreateFrame:  {
    __typename: "Frame",
    id: string,
    captureDate: string,
    aperture: string | null,
    shutterSpeed: string | null,
    description: string | null,
    film:  {
      __typename: "Film",
      id: string,
      filmNumber: number | null,
      camera:  {
        __typename: "Camera",
        id: string,
        brand: string,
        model: string,
      } | null,
      film:  {
        __typename: "FilmStock",
        id: string,
        filmBrand: string,
        type: string | null,
        size: FilmSize | null,
        expiryDate: string,
        quantity: number | null,
      } | null,
      frames:  {
        __typename: "ModelFrameConnection",
        nextToken: string | null,
      } | null,
      inCameraDate: string,
      outCameraDate: string | null,
      processedWhere: string | null,
      processedHow: string | null,
      processedDate: string | null,
    } | null,
  } | null,
};

export type OnUpdateFrameSubscription = {
  onUpdateFrame:  {
    __typename: "Frame",
    id: string,
    captureDate: string,
    aperture: string | null,
    shutterSpeed: string | null,
    description: string | null,
    film:  {
      __typename: "Film",
      id: string,
      filmNumber: number | null,
      camera:  {
        __typename: "Camera",
        id: string,
        brand: string,
        model: string,
      } | null,
      film:  {
        __typename: "FilmStock",
        id: string,
        filmBrand: string,
        type: string | null,
        size: FilmSize | null,
        expiryDate: string,
        quantity: number | null,
      } | null,
      frames:  {
        __typename: "ModelFrameConnection",
        nextToken: string | null,
      } | null,
      inCameraDate: string,
      outCameraDate: string | null,
      processedWhere: string | null,
      processedHow: string | null,
      processedDate: string | null,
    } | null,
  } | null,
};

export type OnDeleteFrameSubscription = {
  onDeleteFrame:  {
    __typename: "Frame",
    id: string,
    captureDate: string,
    aperture: string | null,
    shutterSpeed: string | null,
    description: string | null,
    film:  {
      __typename: "Film",
      id: string,
      filmNumber: number | null,
      camera:  {
        __typename: "Camera",
        id: string,
        brand: string,
        model: string,
      } | null,
      film:  {
        __typename: "FilmStock",
        id: string,
        filmBrand: string,
        type: string | null,
        size: FilmSize | null,
        expiryDate: string,
        quantity: number | null,
      } | null,
      frames:  {
        __typename: "ModelFrameConnection",
        nextToken: string | null,
      } | null,
      inCameraDate: string,
      outCameraDate: string | null,
      processedWhere: string | null,
      processedHow: string | null,
      processedDate: string | null,
    } | null,
  } | null,
};

export type OnCreateFilmStockSubscription = {
  onCreateFilmStock:  {
    __typename: "FilmStock",
    id: string,
    filmBrand: string,
    type: string | null,
    size: FilmSize | null,
    expiryDate: string,
    quantity: number | null,
  } | null,
};

export type OnUpdateFilmStockSubscription = {
  onUpdateFilmStock:  {
    __typename: "FilmStock",
    id: string,
    filmBrand: string,
    type: string | null,
    size: FilmSize | null,
    expiryDate: string,
    quantity: number | null,
  } | null,
};

export type OnDeleteFilmStockSubscription = {
  onDeleteFilmStock:  {
    __typename: "FilmStock",
    id: string,
    filmBrand: string,
    type: string | null,
    size: FilmSize | null,
    expiryDate: string,
    quantity: number | null,
  } | null,
};
