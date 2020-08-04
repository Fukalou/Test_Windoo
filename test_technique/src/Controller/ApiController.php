<?php

namespace App\Controller;

use App\Entity\Idea;
use Faker\Factory;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

class ApiController extends AbstractController
{
    /**
     * @Route("/api/idea", name="api_idea", methods={"GET"})
     */
    public function index(NormalizerInterface $normalizerInterface)
    {

        $faker = \Faker\Factory::create('fr-FR');
        
        for( $i = 0; $i <= mt_rand(10,50); $i++)
        {
            $idea = new Idea();
            
            $idea->setId($i)
                 ->setTitle($faker->sentence(4, true))
                 ->setCreatedAt($faker->dateTimeBetween($startDate = '-6 months', $endDate = 'now', $timezone = null))
                 ->setScore($faker->numberBetween($min = 0, $max = 50))
                 ->setAuthor($faker->userName);

            $ideas[] = $idea;
        }

        $ideasJson = json_encode($normalizerInterface->normalize($ideas));

        // dd($ideasJson, $ideas);

        return new Response($ideasJson, 200, [
            "content-type" => "application/json"
        ]);
    }
}
