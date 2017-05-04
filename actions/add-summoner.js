'use strict'

import api from './../services/api'

import {
  ADD_SUMMONER_REQUEST,
  ADD_SUMMONER_SUCCESS,
  ADD_SUMMONER_ERROR
} from './../constants'

function addSummonerRequest() {
  return {
    type: ADD_SUMMONER_REQUEST
  }
}

function addSummonerSuccess(data) {
  return {
    type: ADD_SUMMONER_SUCCESS,
    data
  }
}

function addSummonerError(data) {
  return {
    type: ADD_SUMMONER_ERROR,
    data
  }
}

function handleAddSummoner(summoner) {
  return dispatch => {
    dispatch(addSummonerRequest())
    return api({
      method: 'post',
      url: '/summoner',
      data: summoner
    })
      .then(res => dispatch(addSummonerSuccess(res)))
      .catch(err => dispatch(addSummonerError(err.message)))
  }
}

export default handleAddSummoner
