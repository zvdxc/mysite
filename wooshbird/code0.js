gdjs.GameCode = {};
gdjs.GameCode.GDChickenObjects1= [];
gdjs.GameCode.GDChickenObjects2= [];
gdjs.GameCode.GDChickenObjects3= [];
gdjs.GameCode.GDChickenObjects4= [];
gdjs.GameCode.GDChickenObjects5= [];
gdjs.GameCode.GDMovingPlatformObjects1= [];
gdjs.GameCode.GDMovingPlatformObjects2= [];
gdjs.GameCode.GDMovingPlatformObjects3= [];
gdjs.GameCode.GDMovingPlatformObjects4= [];
gdjs.GameCode.GDMovingPlatformObjects5= [];
gdjs.GameCode.GDSnowObjects1= [];
gdjs.GameCode.GDSnowObjects2= [];
gdjs.GameCode.GDSnowObjects3= [];
gdjs.GameCode.GDSnowObjects4= [];
gdjs.GameCode.GDSnowObjects5= [];
gdjs.GameCode.GDFinalScoreObjects1= [];
gdjs.GameCode.GDFinalScoreObjects2= [];
gdjs.GameCode.GDFinalScoreObjects3= [];
gdjs.GameCode.GDFinalScoreObjects4= [];
gdjs.GameCode.GDFinalScoreObjects5= [];
gdjs.GameCode.GDInstructionsObjects1= [];
gdjs.GameCode.GDInstructionsObjects2= [];
gdjs.GameCode.GDInstructionsObjects3= [];
gdjs.GameCode.GDInstructionsObjects4= [];
gdjs.GameCode.GDInstructionsObjects5= [];
gdjs.GameCode.GDRestartInstructionsObjects1= [];
gdjs.GameCode.GDRestartInstructionsObjects2= [];
gdjs.GameCode.GDRestartInstructionsObjects3= [];
gdjs.GameCode.GDRestartInstructionsObjects4= [];
gdjs.GameCode.GDRestartInstructionsObjects5= [];
gdjs.GameCode.GDCurrentScoreObjects1= [];
gdjs.GameCode.GDCurrentScoreObjects2= [];
gdjs.GameCode.GDCurrentScoreObjects3= [];
gdjs.GameCode.GDCurrentScoreObjects4= [];
gdjs.GameCode.GDCurrentScoreObjects5= [];
gdjs.GameCode.GDHighScoreObjects1= [];
gdjs.GameCode.GDHighScoreObjects2= [];
gdjs.GameCode.GDHighScoreObjects3= [];
gdjs.GameCode.GDHighScoreObjects4= [];
gdjs.GameCode.GDHighScoreObjects5= [];
gdjs.GameCode.GDFlashObjects1= [];
gdjs.GameCode.GDFlashObjects2= [];
gdjs.GameCode.GDFlashObjects3= [];
gdjs.GameCode.GDFlashObjects4= [];
gdjs.GameCode.GDFlashObjects5= [];
gdjs.GameCode.GDSkyBackgroundObjects1= [];
gdjs.GameCode.GDSkyBackgroundObjects2= [];
gdjs.GameCode.GDSkyBackgroundObjects3= [];
gdjs.GameCode.GDSkyBackgroundObjects4= [];
gdjs.GameCode.GDSkyBackgroundObjects5= [];


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDMovingPlatformObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMovingPlatformObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDMovingPlatformObjects1[i].getAngle() == 180 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMovingPlatformObjects1[k] = gdjs.GameCode.GDMovingPlatformObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDMovingPlatformObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDMovingPlatformObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMovingPlatformObjects1[i].flipX(true);
}
}}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Chicken"), gdjs.GameCode.GDChickenObjects1);
gdjs.copyArray(runtimeScene.getObjects("MovingPlatform"), gdjs.GameCode.GDMovingPlatformObjects1);
{runtimeScene.getScene().getVariables().get("State").setString("NotStarted");
}{for(var i = 0, len = gdjs.GameCode.GDChickenObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDChickenObjects1[i].activateBehavior("PlatformerObject", false);
}
}{runtimeScene.getScene().getVariables().get("HazardHeight").setNumber((( gdjs.GameCode.GDMovingPlatformObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDMovingPlatformObjects1[0].getHeight()));
}{runtimeScene.getScene().getVariables().get("HazardWidth").setNumber((( gdjs.GameCode.GDMovingPlatformObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDMovingPlatformObjects1[0].getWidth()));
}
{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Chicken"), gdjs.GameCode.GDChickenObjects1);
{runtimeScene.getScene().getVariables().get("State").setString("GamePlaying");
}{for(var i = 0, len = gdjs.GameCode.GDChickenObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDChickenObjects1[i].activateBehavior("EllipseMovement", false);
}
}{for(var i = 0, len = gdjs.GameCode.GDChickenObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDChickenObjects1[i].activateBehavior("PlatformerObject", true);
}
}}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("State")) == "NotStarted";
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("SkyBackground"), gdjs.GameCode.GDSkyBackgroundObjects2);
{for(var i = 0, len = gdjs.GameCode.GDSkyBackgroundObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSkyBackgroundObjects2[i].setXOffset(gdjs.GameCode.GDSkyBackgroundObjects2[i].getXOffset() + (10 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Snow"), gdjs.GameCode.GDSnowObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDSnowObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDSnowObjects2[i].getAngle() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDSnowObjects2[k] = gdjs.GameCode.GDSnowObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDSnowObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDSnowObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDSnowObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSnowObjects2[i].setXOffset(gdjs.GameCode.GDSnowObjects2[i].getXOffset() + (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Snow"), gdjs.GameCode.GDSnowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDSnowObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDSnowObjects1[i].getAngle() == 180 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDSnowObjects1[k] = gdjs.GameCode.GDSnowObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDSnowObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDSnowObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDSnowObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSnowObjects1[i].setXOffset(gdjs.GameCode.GDSnowObjects1[i].getXOffset() - (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{


gdjs.GameCode.eventsList4(runtimeScene);
}


};gdjs.GameCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("State")) == "NotStarted";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("State")) == "GamePlaying";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Chicken"), gdjs.GameCode.GDChickenObjects3);
{for(var i = 0, len = gdjs.GameCode.GDChickenObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDChickenObjects3[i].rotateTowardAngle(gdjs.randomFloatInRange(-(90), 90), 50, runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Chicken"), gdjs.GameCode.GDChickenObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDChickenObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDChickenObjects3[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDChickenObjects3[k] = gdjs.GameCode.GDChickenObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDChickenObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDChickenObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDChickenObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDChickenObjects3[i].rotateTowardAngle(90, 150, runtimeScene);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Chicken"), gdjs.GameCode.GDChickenObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx_wing.wav", false, 70, gdjs.randomFloatInRange(1.1, 1.3));
}{for(var i = 0, len = gdjs.GameCode.GDChickenObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDChickenObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDChickenObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDChickenObjects2[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.GameCode.GDChickenObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDChickenObjects2[i].setAngle(320);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMovingPlatformObjects3Objects = Hashtable.newFrom({"MovingPlatform": gdjs.GameCode.GDMovingPlatformObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMovingPlatformObjects3Objects = Hashtable.newFrom({"MovingPlatform": gdjs.GameCode.GDMovingPlatformObjects3});
gdjs.GameCode.eventsList8 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "pipe_spawn") > 2.5;
if (isConditionTrue_0) {
gdjs.GameCode.GDMovingPlatformObjects3.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pipe_spawn");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMovingPlatformObjects3Objects, 400, gdjs.randomInRange(10, 90), "");
}{for(var i = 0, len = gdjs.GameCode.GDMovingPlatformObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDMovingPlatformObjects3[i].rotateTowardAngle(180, 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDMovingPlatformObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDMovingPlatformObjects3[i].flipX(true);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMovingPlatformObjects3Objects, 400, (( gdjs.GameCode.GDMovingPlatformObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDMovingPlatformObjects3[0].getPointY("")) + 370, "");
}{for(var i = 0, len = gdjs.GameCode.GDMovingPlatformObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDMovingPlatformObjects3[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDMovingPlatformObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDMovingPlatformObjects3[i].setHeight(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("HazardHeight")));
}
}{for(var i = 0, len = gdjs.GameCode.GDMovingPlatformObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDMovingPlatformObjects3[i].setWidth(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("HazardWidth")));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MovingPlatform"), gdjs.GameCode.GDMovingPlatformObjects2);
{for(var i = 0, len = gdjs.GameCode.GDMovingPlatformObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMovingPlatformObjects2[i].addForce(-(100), 0, 0);
}
}}

}


};gdjs.GameCode.eventsList9 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.GameCode.GDCurrentScoreObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDCurrentScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCurrentScoreObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, gdjs.randomInRange(-(10), 10), gdjs.randomInRange(-(10), 10), gdjs.randomInRange(-(10), 10), 0.125, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.GameCode.eventsList10 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Chicken"), gdjs.GameCode.GDChickenObjects2);
gdjs.copyArray(runtimeScene.getObjects("MovingPlatform"), gdjs.GameCode.GDMovingPlatformObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMovingPlatformObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDMovingPlatformObjects2[i].getX() < (( gdjs.GameCode.GDChickenObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDChickenObjects2[0].getPointX("Centre")) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMovingPlatformObjects2[k] = gdjs.GameCode.GDMovingPlatformObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDMovingPlatformObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMovingPlatformObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDMovingPlatformObjects2[i].getX() > (( gdjs.GameCode.GDChickenObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDChickenObjects2[0].getPointX("Centre")) - 60 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMovingPlatformObjects2[k] = gdjs.GameCode.GDMovingPlatformObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDMovingPlatformObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10446988);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CurrentScore"), gdjs.GameCode.GDCurrentScoreObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.GameCode.GDCurrentScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCurrentScoreObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx_point.wav", false, 100, 1);
}
{ //Subevents
gdjs.GameCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDChickenObjects1Objects = Hashtable.newFrom({"Chicken": gdjs.GameCode.GDChickenObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMovingPlatformObjects1ObjectsGDgdjs_9546GameCode_9546GDSnowObjects1Objects = Hashtable.newFrom({"MovingPlatform": gdjs.GameCode.GDMovingPlatformObjects1, "Snow": gdjs.GameCode.GDSnowObjects1});
gdjs.GameCode.eventsList11 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Chicken"), gdjs.GameCode.GDChickenObjects1);
gdjs.copyArray(runtimeScene.getObjects("MovingPlatform"), gdjs.GameCode.GDMovingPlatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("Snow"), gdjs.GameCode.GDSnowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDChickenObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMovingPlatformObjects1ObjectsGDgdjs_9546GameCode_9546GDSnowObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDChickenObjects1 */
{runtimeScene.getScene().getVariables().get("State").setString("Gameover");
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx_hit.wav", false, 100, 0.8);
}{for(var i = 0, len = gdjs.GameCode.GDChickenObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDChickenObjects1[i].activateBehavior("PlatformerObject", false);
}
}}

}


};gdjs.GameCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10438572);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Instructions"), gdjs.GameCode.GDInstructionsObjects2);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pipe_spawn");
}{for(var i = 0, len = gdjs.GameCode.GDInstructionsObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDInstructionsObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.GameCode.eventsList7(runtimeScene);
}


{


gdjs.GameCode.eventsList8(runtimeScene);
}


{


gdjs.GameCode.eventsList10(runtimeScene);
}


{


gdjs.GameCode.eventsList11(runtimeScene);
}


};gdjs.GameCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("State")) == "GamePlaying";
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFlashObjects2Objects = Hashtable.newFrom({"Flash": gdjs.GameCode.GDFlashObjects2});
gdjs.GameCode.eventsList14 = function(runtimeScene, asyncObjectsList) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("save", "high_score");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FinalScore"), gdjs.GameCode.GDFinalScoreObjects4);
gdjs.copyArray(runtimeScene.getObjects("HighScore"), gdjs.GameCode.GDHighScoreObjects4);
{gdjs.evtTools.storage.readNumberFromJSONFile("save", "high_score", runtimeScene, runtimeScene.getScene().getVariables().get("PreviousBestScore"));
}{for(var i = 0, len = gdjs.GameCode.GDHighScoreObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDHighScoreObjects4[i].setString("Highscore: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("PreviousBestScore"))));
}
}{for(var i = 0, len = gdjs.GameCode.GDFinalScoreObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDFinalScoreObjects4[i].setString("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("PreviousBestScore"));
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("save", "high_score", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}}

}


};gdjs.GameCode.asyncCallback10452244 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("CurrentScore"), gdjs.GameCode.GDCurrentScoreObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("Flash"), gdjs.GameCode.GDFlashObjects3);

{for(var i = 0, len = gdjs.GameCode.GDFlashObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDFlashObjects3[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Gameover");
}{for(var i = 0, len = gdjs.GameCode.GDCurrentScoreObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCurrentScoreObjects3[i].hide();
}
}
{ //Subevents
gdjs.GameCode.eventsList14(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.GameCode.eventsList15 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.GameCode.GDFlashObjects2) asyncObjectsList.addObject("Flash", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.GameCode.asyncCallback10452244(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10451492);
}
if (isConditionTrue_0) {
gdjs.GameCode.GDFlashObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFlashObjects2Objects, 0, 0, "GUI");
}{for(var i = 0, len = gdjs.GameCode.GDFlashObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlashObjects2[i].getBehavior("Flash").Flash(0.1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.GameCode.eventsList15(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.GameCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("State")) == "Gameover";
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList18 = function(runtimeScene) {

{


gdjs.GameCode.eventsList1(runtimeScene);
}


{


gdjs.GameCode.eventsList3(runtimeScene);
}


{


gdjs.GameCode.eventsList6(runtimeScene);
}


{


gdjs.GameCode.eventsList13(runtimeScene);
}


{


gdjs.GameCode.eventsList17(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDChickenObjects1.length = 0;
gdjs.GameCode.GDChickenObjects2.length = 0;
gdjs.GameCode.GDChickenObjects3.length = 0;
gdjs.GameCode.GDChickenObjects4.length = 0;
gdjs.GameCode.GDChickenObjects5.length = 0;
gdjs.GameCode.GDMovingPlatformObjects1.length = 0;
gdjs.GameCode.GDMovingPlatformObjects2.length = 0;
gdjs.GameCode.GDMovingPlatformObjects3.length = 0;
gdjs.GameCode.GDMovingPlatformObjects4.length = 0;
gdjs.GameCode.GDMovingPlatformObjects5.length = 0;
gdjs.GameCode.GDSnowObjects1.length = 0;
gdjs.GameCode.GDSnowObjects2.length = 0;
gdjs.GameCode.GDSnowObjects3.length = 0;
gdjs.GameCode.GDSnowObjects4.length = 0;
gdjs.GameCode.GDSnowObjects5.length = 0;
gdjs.GameCode.GDFinalScoreObjects1.length = 0;
gdjs.GameCode.GDFinalScoreObjects2.length = 0;
gdjs.GameCode.GDFinalScoreObjects3.length = 0;
gdjs.GameCode.GDFinalScoreObjects4.length = 0;
gdjs.GameCode.GDFinalScoreObjects5.length = 0;
gdjs.GameCode.GDInstructionsObjects1.length = 0;
gdjs.GameCode.GDInstructionsObjects2.length = 0;
gdjs.GameCode.GDInstructionsObjects3.length = 0;
gdjs.GameCode.GDInstructionsObjects4.length = 0;
gdjs.GameCode.GDInstructionsObjects5.length = 0;
gdjs.GameCode.GDRestartInstructionsObjects1.length = 0;
gdjs.GameCode.GDRestartInstructionsObjects2.length = 0;
gdjs.GameCode.GDRestartInstructionsObjects3.length = 0;
gdjs.GameCode.GDRestartInstructionsObjects4.length = 0;
gdjs.GameCode.GDRestartInstructionsObjects5.length = 0;
gdjs.GameCode.GDCurrentScoreObjects1.length = 0;
gdjs.GameCode.GDCurrentScoreObjects2.length = 0;
gdjs.GameCode.GDCurrentScoreObjects3.length = 0;
gdjs.GameCode.GDCurrentScoreObjects4.length = 0;
gdjs.GameCode.GDCurrentScoreObjects5.length = 0;
gdjs.GameCode.GDHighScoreObjects1.length = 0;
gdjs.GameCode.GDHighScoreObjects2.length = 0;
gdjs.GameCode.GDHighScoreObjects3.length = 0;
gdjs.GameCode.GDHighScoreObjects4.length = 0;
gdjs.GameCode.GDHighScoreObjects5.length = 0;
gdjs.GameCode.GDFlashObjects1.length = 0;
gdjs.GameCode.GDFlashObjects2.length = 0;
gdjs.GameCode.GDFlashObjects3.length = 0;
gdjs.GameCode.GDFlashObjects4.length = 0;
gdjs.GameCode.GDFlashObjects5.length = 0;
gdjs.GameCode.GDSkyBackgroundObjects1.length = 0;
gdjs.GameCode.GDSkyBackgroundObjects2.length = 0;
gdjs.GameCode.GDSkyBackgroundObjects3.length = 0;
gdjs.GameCode.GDSkyBackgroundObjects4.length = 0;
gdjs.GameCode.GDSkyBackgroundObjects5.length = 0;

gdjs.GameCode.eventsList18(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
