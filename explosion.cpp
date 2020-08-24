//Author Gabriel Lovett w16004078
#include "explosion.h"
//Explosion constructor doesn't need anything apart from manager referance 
Explosion::Explosion(ObjectManager& manager) : theManager(manager)
{

}

//Creates the array with each explosion image in it for animation later
void Explosion::Initialise(Vector2D startPosition)
{
	MyDrawEngine* pDE = MyDrawEngine::GetInstance();
	theManager.AddObject(this);
	images[0]= pDE->LoadPicture(L"explosion1.bmp");
	images[1] = pDE->LoadPicture(L"explosion2.bmp");
	images[2] = pDE->LoadPicture(L"explosion3.bmp");
	images[3] = pDE->LoadPicture(L"explosion4.bmp");
	images[4] = pDE->LoadPicture(L"explosion5.bmp");
	images[5] = pDE->LoadPicture(L"explosion6.bmp");
	images[6] = pDE->LoadPicture(L"explosion7.bmp");
	images[7] = pDE->LoadPicture(L"explosion8.bmp");
	currentImage = 0;
	active = true;
	position = startPosition;
	MySoundEngine* pMSE = MySoundEngine::GetInstance();
	SoundIndex explosion = pMSE->LoadWav(L"explosion2.wav");
	//Sound doesnt work, crashs game?
	//pMSE->SetVolume(explosion, -1000);
	//pMSE->Play(explosion);
}
//Updates the explosion to cycle through each image 
void Explosion::Update(float frametime)
{
	currentImage = currentImage + (4.0f * frametime);
	int current = currentImage;
	image = images[current];
	if (current >= 8.0f)
	{
		active = false;
	}
	
}
//Explosion doesn't collide so this is left blank
void Explosion::Collide()
{

}

