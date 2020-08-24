//Author Gabriel Lovett w16004078
#include "spaceship.h"
#include "asteroid.h"
#include <list>
//Creates pointers to spaceship and asteroid
Spaceship* pShip;
Asteroid* pAsteroid;
//Sets the starting position of spaceship
Vector2D Spos(0, -800);
//Creates an object manager
ObjectManager manager;

// Called at the start of the game - when changing state from MENU to RUNNING
// Use this to initialise the core game
ErrorType Game::StartOfGame()
{
	// Code to set up your game *********************************************
	// **********************************************************************
	gt.mark();
	//Create new spaceship using manager
	pShip = new Spaceship(manager);
	pShip->Initialise(Spos);
	manager.AddObject(pShip);

	//Creates the locations for all asteroids and adds them to the manager to be rendered/updated
	for (int i = 1; i < 150; i++)
	{
		Vector2D Apos(rand() % 4000 + -2000, rand() % 15000);
		pAsteroid = new Asteroid(manager);
		pAsteroid->Initialise(Apos);
		manager.AddObject(pAsteroid);
	}



	return SUCCESS;
}