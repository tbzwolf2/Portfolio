//Author Gabriel Lovett w16004078
#include "spaceship.h"
//Constructor for spaceship, sets the basic paramaters for the object, takes a manager as referance to find it for fucntions
Spaceship::Spaceship(ObjectManager& manager) : theManager(manager)
{
	active = false;
	LoadImage(L"spaceship.bmp");
	LoadSound(L"shoot.wav");
}
//Sets the location of the ship with a 2d Vector
void Spaceship::Initialise(Vector2D pos)
{
	active = true;
	position.set(pos);
	bulletPosition = position + Vector2D(0,4);
}

//A update function for the spaceship to be called in the manager, allows the ship to move and fire
void Spaceship::Update(float frametime) 
{
	
	MyInputs* pInputs = MyInputs::GetInstance();
	//Movement controls for the spaceship to move left and right, updates bullet position so the bullets fire from the ship
	pInputs->SampleKeyboard();
	if (pInputs->KeyPressed(DIK_LEFT))
	{
		position = position + Vector2D(-4.0f, 0);
		bulletPosition = position + Vector2D(-4.0f, 0);
	}
	if (pInputs->KeyPressed(DIK_RIGHT))
	{
		position = position + Vector2D(4.0f, 0);
		bulletPosition = position + Vector2D(-4.0f, 0);
	}

	//Shoots with the space bar, places the bullet above the ship instead of inside, shot speed is limited by time
	shootDelayTimer = shootDelayTimer - frametime;
	if (pInputs->NewKeyPressed(DIK_SPACE) && shootDelayTimer<=0)
	{
		Bullet* pBullet = new Bullet(theManager);
		pBullet->Initialise(bulletPosition);
		shootDelayTimer = 0.4f;
		theManager.AddObject(pBullet);
	}
}
//When the spaceship collides it creates a new explosion in the same position and sets itself to false to be deleted
void Spaceship::Collide()
{
	Explosion* pExp = new Explosion(theManager);
	pExp->Initialise(position);
	theManager.AddObject(pExp);
	active = false;

}



