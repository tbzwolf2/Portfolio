//Author Gabriel Lovett w16004078
#include "objectmanager.h"
#include "GameObject.h"
#include <algorithm>
//Constructor
ObjectManager::ObjectManager()
{
}

//Something here is broken and crashes the game? 

//Adds an object to list to be updated and rendered, takes a pointer to an object as args
void ObjectManager::AddObject(GameObject* pNewObject)
{
	pObjectList.push_back(pNewObject);
}
//Renders all objects in the list 
void ObjectManager::RenderAll()
{
	for (GameObject*& object : pObjectList)
	{
		object->Render();
	}

}
//Updates all objects and checks for collsions
void ObjectManager::UpdateAll(float frametime)
{
	for (GameObject*& object : pObjectList)
	{
		object->Update(frametime);
	}
	UpdateCollision();
	DeleteInactive();



}

//Iterates through two lists that check if any objects have intersected, if it has it tells both objects
void ObjectManager::UpdateCollision()
{
	std::list<GameObject*>::iterator iterator1;
	std::list<GameObject*>::iterator iterator2;
	//Nested loops that move through every object in object list to find any that have collided
	for (iterator1 = pObjectList.begin(); iterator1 != pObjectList.end(); iterator1++)
	{
		for (iterator2 = next(iterator1); iterator2 != pObjectList.end(); iterator2++)
		{
			if((*iterator1)->Collision().Intersects((*iterator2)->Collision()))
			{
				(*iterator1)->Collide();
				(*iterator2)->Collide();
			}
		}
	}
}
//Deletes every object within the object list
void ObjectManager::DeleteAll()
{
	//Cycles through every object in the list and simply deletes them 
	for (GameObject*& object : pObjectList)
	{
			delete object;
			object = nullptr;
	}
	pObjectList.clear();
}
//Deletes any object that is set to inactive
void ObjectManager::DeleteInactive()
{
	//Finds any objects that are set to inactive and deletes them
	for (GameObject*& object : pObjectList)
	{
		if (object->active == false)
		{
			delete object;
			object = nullptr;
		}
	}
	auto iterator = remove(pObjectList.begin(), pObjectList.end(), nullptr);
	pObjectList.erase(iterator, pObjectList.end());
}
