
if (typeof gdjs.evtsExt__ExtendedMath__ToFixed !== "undefined") {
  gdjs.evtsExt__ExtendedMath__ToFixed.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ExtendedMath__ToFixed = {};


gdjs.evtsExt__ExtendedMath__ToFixed.userFunc0xc45ae8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const valueToBeRounded = eventsFunctionContext.getArgument("ValueToBeRounded");
const numberOfDecimalPlaces = eventsFunctionContext.getArgument("NumberOfDecimalPlaces");
eventsFunctionContext.returnValue = Number(valueToBeRounded.toFixed(numberOfDecimalPlaces));
};
gdjs.evtsExt__ExtendedMath__ToFixed.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__ExtendedMath__ToFixed.userFunc0xc45ae8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ExtendedMath__ToFixed.func = function(runtimeScene, ValueToBeRounded, NumberOfDecimalPlaces, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "ValueToBeRounded") return ValueToBeRounded;
if (argName === "NumberOfDecimalPlaces") return NumberOfDecimalPlaces;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ExtendedMath__ToFixed.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__ExtendedMath__ToFixed.registeredGdjsCallbacks = [];