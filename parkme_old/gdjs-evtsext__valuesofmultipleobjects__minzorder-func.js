
if (typeof gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder !== "undefined") {
  gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder = {};
gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.forEachIndex2 = 0;

gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.forEachObjects2 = [];

gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.forEachTemporary2 = null;

gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.forEachTotalCount2 = 0;

gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.GDObjectObjects1= [];
gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.GDObjectObjects2= [];
gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.GDObjectObjects3= [];
gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.GDObjectObjects4= [];


gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.GDObjectObjects2, gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.GDObjectObjects3[i].getZOrder() < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("MinZOrder")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.GDObjectObjects3[k] = gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.GDObjectObjects3 */
{runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("MinZOrder").setNumber((( gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.GDObjectObjects3[0].getZOrder()));
}}

}


};gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.GDObjectObjects1);
{runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("MinZOrder").setNumber((( gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.GDObjectObjects1[0].getZOrder()));
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.GDObjectObjects1);

for (gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.forEachIndex2 = 0;gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.forEachIndex2 < gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.GDObjectObjects1.length;++gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.forEachIndex2) {
gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.GDObjectObjects2.length = 0;


gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.forEachTemporary2 = gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.GDObjectObjects1[gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.forEachIndex2];
gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.GDObjectObjects2.push(gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("MinZOrder")); }}}

}


};

gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.func = function(runtimeScene, Object, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.GDObjectObjects1.length = 0;
gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.GDObjectObjects2.length = 0;
gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.GDObjectObjects3.length = 0;
gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.GDObjectObjects4.length = 0;

gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.eventsList1(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__ValuesOfMultipleObjects__MinZOrder.registeredGdjsCallbacks = [];