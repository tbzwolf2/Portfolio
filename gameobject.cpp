//Author Gabriel Lovett w16004078
#include "gameobject.h";
//Constructor
GameObject::GameObject()
{

}
//A render function for every object to create it's self
void GameObject::Render() 
{
	MyDrawEngine* pDE = MyDrawEngine::GetInstance();
	pDE->DrawAt(position, image);
}
//A function for each subclass to load it's specific images
void GameObject::LoadImage(const wchar_t* filename)
{
	image = MyDrawEngine::GetInstance()->LoadPicture(filename);
}
//A function for each subclass to load it's specific sounds
void GameObject::LoadSound(const wchar_t* filename)
{
	sound = MySoundEngine::GetInstance()->LoadWav(filename);
}
//Sets a circle that detects any collision with the gameobjects, returns the hitbox
IShape2D& GameObject::Collision()
{
	size = 10.0f;
	hitbox.PlaceAt(position, size);
	return hitbox;
}




