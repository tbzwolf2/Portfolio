//Author Gabriel Lovett w16004078
#include "bullet.h"
//Constructor for bullet that takes a referance to manager, sets basic attributes
Bullet::Bullet(ObjectManager& manager) : theManager(manager)
{
	active = false;
	LoadImage(L"bullet.bmp");
	velocity = 4.0f;

}
//Sets the location of the bullet based on it's arg
void Bullet::Initialise(Vector2D pos)
{
	active = true;
	position = pos + Vector2D(0.0f,20.0f);

}
//Moves the bullet at set speed
void Bullet::Update(float frametime)
{
	position = position + Vector2D(0, velocity);

}
//Bullet simply dissapears on collision
void Bullet::Collide()
{
	active = false;
}
