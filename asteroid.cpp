//Author Gabriel Lovett w16004078
#include "asteroid.h"
//Constructor that creates the image for the asteroid, args a refernce to the manager
Asteroid::Asteroid(ObjectManager& manager) : theManager(manager)
{
	active = false;
	LoadImage(L"rock4.bmp");

}
//Sets the asteroid loaction and if its active
void Asteroid::Initialise(Vector2D pos)
{
	active = true;
	position.set(pos);
}
//The asteroid falls at a fixed rate that is updated here and used by manager
void Asteroid::Update(float frametime)
{
	position = position + Vector2D(0, -4.0f);
}
//When the asteroid collides it explodes 
void Asteroid::Collide()
{
	Explosion* pExp = new Explosion(theManager);
	pExp->Initialise(position);
	theManager.AddObject(pExp);
	active = false;

}


