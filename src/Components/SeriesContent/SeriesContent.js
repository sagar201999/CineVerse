import React from 'react'
import './SeriesContent.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LandingFooter from '../Footer/LandingFooter';

const SeriesContent = () => {

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 5
    };


    return (
        <>
            <div className='series_content'>
                <div className='box trending'>
                    <h4 className='content-heading'>Trending Now</h4>
                    <div className='content_wrapper'>
                        <Slider {...settings}>
                            <img src='../../../series_images/trending/fate.jpg' alt='fate' className='content trending_content' />
                            <img src='../../../series_images/trending/alice_in-borderland.jpg' alt='alice_in-borderland' className='content trending_content' />
                            <img src='../../../series_images/trending/lock_and_key.jpg' alt='lock_and_key' className='content trending_content' />
                            <img src='../../../series_images/trending/mystery_of_arrows.jpg' alt='mystery_of_arrows' className='content trending_content' />
                            <img src='../../../series_images/trending/naruto_shippuden.webp' alt='naruto_shippuden' className='content trending_content' />
                            <img src='../../../series_images/trending/lost_in_space.jpg' alt='lost_in_space' className='content trending_content' />
                            <img src='../../../series_images/trending/peaky_blinders.jpg' alt='peaky_blinders' className='content trending_content' />
                            <img src='../../../series_images/trending/sex_education.jpg' alt='sex_education' className='content trending_content' />
                            <img src='../../../series_images/trending/stranger_things.jpg' alt='stranger_things' className='content trending_content' />
                            <img src='../../../series_images/trending/vempire_diaries.webp' alt='vempire_diaries' className='content trending_content' />
                            <img src='../../../series_images/trending/one_piece.webp' alt='one_piece' className='content trending_content' />
                            <img src='../../../series_images/trending/lucifer.jpg' alt='lucifer' className='content trending_content' />
                            <img src='../../../series_images/trending/all_of_us_dead.jpg' alt='all_of_us_dead' className='content trending_content' />
                            <img src='../../../series_images/trending/order.jpg' alt='order' className='content trending_content' />
                            <img src='../../../series_images/trending/ranganrok.jpg' alt='ranganrok' className='content trending_content' />
                            <img src='../../../series_images/trending/sweet_tooth.jpg' alt='sweet_tooth' className='content trending_content' />
                            <img src='../../../series_images/trending/worst_witch.jpg' alt='worst_witch' className='content trending_content' />
                            <img src='../../../series_images/trending/ben_10.webp' alt='ben_10' className='content trending_content' />
                            <img src='../../../series_images/trending/sabrina.jpg' alt='sabrina' className='content trending_content' />
                            <img src='../../../series_images/trending/shadow_&_bones.jpg' alt='shadow_&_bones' className='content trending_content' />
                            <img src='../../../series_images/trending/shadows_hunters.jpg' alt='shadows_hunters' className='content trending_content' />
                            <img src='../../../series_images/trending/squid_games.jpg' alt='squid_games' className='content trending_content' />
                            <img src='../../../series_images/trending/sweet_home.jpg' alt='sweet_home' className='content trending_content' />
                            <img src='../../../series_images/trending/umbrella_academy.jpg' alt='umbrella_academy' className='content trending_content' />
                        </Slider>
                    </div>
                </div>

                <div className='box recent'>
                    <h4 className='content-heading'>Continue watching for you</h4>
                    <div className='content_wrapper'>
                        <Slider {...settings}>
                            <img src='../../../series_images/money_heist.jpg' alt='money_heist' className='content recent' />
                            <img src='../../../series_images/vikings.webp' alt='vikings' className='content recent' />
                            <img src='../../../series_images/witcher.jpg' alt='witcher' className='content recent' />
                            <img src='../../../series_images/titans.jpg' alt='titans' className='content recent' />
                        </Slider>
                    </div>
                </div>

                <div className='box made_in_india'>
                    <h4 className='content-heading'>Made In India</h4>
                    <div className='content_wrapper'>
                        <Slider {...settings}>
                            <img src='../../../series_images/indian/83.webp' alt='83' className='content indian_content' />
                            <img src='../../../series_images/indian/aminal.webp' alt='aminal' className='content indian_content' />
                            <img src='../../../series_images/indian/bahubali.webp' alt='bahubali' className='content indian_content' />
                            <img src='../../../series_images/indian/Bool_bhulaiyya_2.webp' alt='Bool_bhulaiyya_2' className='content indian_content' />
                            <img src='../../../series_images/indian/bulbbul.jpg' alt='bulbbul' className='content indian_content' />
                            <img src='../../../series_images/indian/chupchup_ke.webp' alt='chupchup_ke' className='content indian_content' />
                            <img src='../../../series_images/indian/dream_girl_2.webp' alt='dream_girl_2' className='content indian_content' />
                            <img src='../../../series_images/indian/dunki.webp' alt='dunki' className='content indian_content' />
                            <img src='../../../series_images/indian/gangubai.webp' alt='gangubai' className='content indian_content' />
                            <img src='../../../series_images/indian/guntur_kaaram.webp' alt='guntur_kaaram' className='content indian_content' />
                            <img src='../../../series_images/indian/jawan.webp' alt='jawan' className='content indian_content' />
                            <img src='../../../series_images/indian/kantara.webp' alt='kantara' className='content indian_content' />
                            <img src='../../../series_images/indian/kho_gaye_hum_kaha.jpg' alt='kho_gaye_hum_kaha' className='content indian_content' />
                            <img src='../../../series_images/indian/leo.webp' alt='leo' className='content indian_content' />
                            <img src='../../../series_images/indian/minnal_murali.jpg' alt='minnal_murali' className='content indian_content' />
                            <img src='../../../series_images/indian/omg.webp' alt='omg' className='content indian_content' />
                            <img src='../../../series_images/indian/papa.webp' alt='papa' className='content indian_content' />
                            <img src='../../../series_images/indian/pk.webp' alt='pk' className='content indian_content' />
                            <img src='../../../series_images/indian/rrr.webp' alt='rrr' className='content indian_content' />
                            <img src='../../../series_images/indian/salaar.webp' alt='salaar' className='content indian_content' />
                            <img src='../../../series_images/indian/stree.webp' alt='stree' className='content indian_content' />
                            <img src='../../../series_images/indian/she.jpg' alt='she' className='content indian_content' />
                            <img src='../../../series_images/indian/tu_joota_mai_makkar.webp' alt='tu_joota_mai_makkar' className='content indian_content' />
                        </Slider>
                    </div>
                </div>

                <div className='box anime'>
                    <h4 className='content-heading'>Anime</h4>
                    <div className='content_wrapper'>
                        <Slider {...settings}>
                            <img src='../../../series_images/anime/demon_slayer.webp' alt='demon_slayer' className='content anime_content' />
                            <img src='../../../series_images/anime/one_piece.webp' alt='one_piece' className='content anime_content' />
                            <img src='../../../series_images/anime/seven_deadly_sins.jpg' alt='seven_deadly_sins' className='content anime_content' />
                            <img src='../../../series_images/anime/spyXfamily.webp' alt='spy X family' className='content anime_content' />
                            <img src='../../../series_images/anime/jujustu_kaisen.webp' alt='jujustu_kaisen' className='content anime_content' />
                            <img src='../../../series_images/anime/my_hero_academia.webp' alt='my_hero_academia' className='content anime_content' />
                            <img src='../../../series_images/anime/assassination_classroom.webp' alt='assassination_classroom' className='content anime_content' />
                            <img src='../../../series_images/anime/deah_note.webp' alt='deah_note' className='content anime_content' />
                            <img src='../../../series_images/anime/castelvenia_nocturne.jpg' alt='castelvenia_nocturne' className='content anime_content' />
                            <img src='../../../series_images/anime/chainsaw_man.webp' alt='chainsaw_man' className='content anime_content' />
                            <img src='../../../series_images/anime/bleach.webp' alt='bleach.webp' className='content anime_content' />
                            <img src='../../../series_images/anime/black_clover.jpg' alt='black_clover' className='content anime_content' />
                            <img src='../../../series_images/anime/fairy_tales.webp' alt='fairy_tales' className='content anime_content' />
                            <img src='../../../series_images/anime/four_knights.jpg' alt='four_knights' className='content anime_content' />
                            <img src='../../../series_images/anime/castelvenia.jpg' alt='castelvenia' className='content anime_content' />
                            <img src='../../../series_images/anime/baki_hanma.jpg' alt='baki_hanma' className='content anime_content' />
                            <img src='../../../series_images/anime/basketball.webp' alt='basketball' className='content anime_content' />
                            <img src='../../../series_images/anime/black_clover.webp' alt='black_clover' className='content anime_content' />
                            <img src='../../../series_images/anime/hunterXhunter.webp' alt='hunter X hunter' className='content anime_content' />
                            <img src='../../../series_images/anime/komi_cant_communicate.jpg' alt='komi_cant_communicate' className='content anime_content' />
                            <img src='../../../series_images/anime/one_punch_man.webp' alt='one_punch_man' className='content anime_content' />
                            <img src='../../../series_images/anime/fruit_basket.webp' alt='fruit_basket' className='content anime_content' />
                            <img src='../../../series_images/anime/blue_lock.webp' alt='blue_lock' className='content anime_content' />
                            <img src='../../../series_images/anime/parasite.webp' alt='parasite' className='content anime_content' />
                            <img src='../../../series_images/anime/tokyo_ghoul.webp' alt='tokyo_ghoul' className='content anime_content' />
                            <img src='../../../series_images/anime/tokyo_revengers.webp' alt='tokyo_revengers' className='content anime_content' />
                            <img src='../../../series_images/anime/vinland_saga.webp' alt='vinland_saga' className='content anime_content' />
                            <img src='../../../series_images/anime/haiyaku.webp' alt='haiyaku' className='content anime_content' />
                        </Slider>
                    </div>
                </div>

                <div className='box comedy'>
                    <h4 className='content-heading'>Comedy</h4>
                    <div className='content_wrapper'>
                        <Slider {...settings}>
                            <img src='../../../series_images/comedy/angry_birds_2.webp' alt='angry_birds_2' className='content comedy_content' />
                            <img src='../../../series_images/comedy/bad_guys.webp' alt='bad_guys' className='content comedy_content' />
                            <img src='../../../series_images/comedy/boss_baby.webp' alt='boss_baby' className='content comedy_content' />
                            <img src='../../../series_images/comedy/central_intelligence.webp' alt='central_intelligence' className='content comedy_content' />
                            <img src='../../../series_images/comedy/chocolate_factory.webp' alt='chocolate_factory' className='content comedy_content' />
                            <img src='../../../series_images/comedy/zom_100.jpg' alt='zom_100' className='content comedy_content' />
                            <img src='../../../series_images/comedy/curse_of_bridge_hollow.jpg' alt='curse_of_bridge_hollow' className='content comedy_content' />
                            <img src='../../../series_images/comedy/finidng_ohana.jpg' alt='finidng_ohana' className='content comedy_content' />
                            <img src='../../../series_images/comedy/dispicable_me.webp' alt='dispicable_me' className='content comedy_content' />
                            <img src='../../../series_images/comedy/hotel_transilvenia.webp' alt='hotel_transilvenia' className='content comedy_content' />
                            <img src='../../../series_images/comedy/Jhonny_english.webp' alt='Jhonny_english' className='content comedy_content' />
                            <img src='../../../series_images/comedy/kung_fu_panda_3.webp' alt='kung_fu_panda_3' className='content comedy_content' />
                            <img src='../../../series_images/comedy/leo.jpg' alt='leo' className='content comedy_content' />
                            <img src='../../../series_images/comedy/lift.jpg' alt='lift' className='content comedy_content' />
                            <img src='../../../series_images/comedy/lost_city_of_gold.webp' alt='lost_city_of_gold' className='content comedy_content' />
                            <img src='../../../series_images/comedy/love_and_monsters.jpg' alt='love_and_monsters' className='content comedy_content' />
                            <img src='../../../series_images/comedy/madagaskar.webp' alt='madagaskar' className='content comedy_content' />
                            <img src='../../../series_images/comedy/matilda.webp' alt='matilda' className='content comedy_content' />
                            <img src='../../../series_images/comedy/mean_girls.webp' alt='mean_girls' className='content comedy_content' />
                            <img src='../../../series_images/comedy/minions.webp' alt='minions' className='content comedy_content' />
                            <img src='../../../series_images/comedy/monkey_king.jpg' alt='monkey_king' className='content comedy_content' />
                            <img src='../../../series_images/comedy/orian_and_the_dark.jpg' alt='orian_and_the_dark' className='content comedy_content' />
                            <img src='../../../series_images/comedy/red_notice.jpg' alt='red_notice.jpg' className='content comedy_content' />
                            <img src='../../../series_images/comedy/shaolin_soccer.webp' alt='shaolin_soccer' className='content comedy_content' />
                            <img src='../../../series_images/comedy/sonic_2.webp' alt='sonic_2' className='content comedy_content' />
                            <img src='../../../series_images/comedy/spy_kids_armageddon.jpg' alt='spy_kids_armageddon' className='content comedy_content' />
                            <img src='../../../series_images/comedy/the_dictator.webp' alt='the_dictator' className='content comedy_content' />
                            <img src='../../../series_images/comedy/we_can_be_heroes.jpg' alt='we_can_be_heroes' className='content comedy_content' />
                            <img src='../../../series_images/comedy/we_have_ghost.jpg' alt='we_have_ghost' className='content comedy_content' />
                            <img src='../../../series_images/comedy/yes_day.jpg' alt='yes_day' className='content comedy_content' />
                        </Slider>
                    </div>
                </div>

                <div className='box high_school'>
                    <h4 className='content-heading'>Hign School TV Teen Drama</h4>
                    <div className='content_wrapper'>
                        <Slider {...settings}>
                            <img src='../../../series_images/high_school/alrawabi-school_for_girls.jpg' alt='alrawabi-school_for_girls' className='content high_school_content' />
                            <img src='../../../series_images/high_school/girl_from_nowhere.jpg' alt='girl_from_nowhere' className='content high_school_content' />
                            <img src='../../../series_images/high_school/ginny_and_georgia.jpg' alt='ginny_and_georgia.jpg' className='content high_school_content' />
                            <img src='../../../series_images/high_school/13_reason_why.jpg' alt='13_reason_why' className='content high_school_content' />
                            <img src='../../../series_images/high_school/xo_kutty.jpg' alt='xo_kutty' className='content high_school_content' />
                            <img src='../../../series_images/high_school/one_of_us_lying.jpg' alt='one_of_us_lying' className='content high_school_content' />
                            <img src='../../../series_images/high_school/greenhouse_academy.jpg' alt='greenhouse_academy.jpg' className='content high_school_content' />
                            <img src='../../../series_images/high_school/elite.jpg' alt='elite' className='content high_school_content' />
                            <img src='../../../series_images/high_school/riverdale.webp' alt='riverdale.webp' className='content high_school_content' />
                            <img src='../../../series_images/high_school/sinn.jpg' alt='sinn' className='content high_school_content' />
                            <img src='../../../series_images/high_school/heartstopper.jpg' alt='heartstopper' className='content high_school_content' />
                            <img src='../../../series_images/high_school/first_kill.jpg' alt='first_kill' className='content high_school_content' />
                            <img src='../../../series_images/high_school/gossip_girl.webp' alt='gossip_girl' className='content high_school_content' />
                            <img src='../../../series_images/high_school/october_faction.jpg' alt='october_faction' className='content high_school_content' />
                            <img src='../../../series_images/high_school/insatiable.jpg' alt='insatiable' className='content high_school_content' />
                            <img src='../../../series_images/high_school/class.jpg' alt='class' className='content high_school_content' />
                            <img src='../../../series_images/high_school/control_z.jpg' alt='control_z' className='content high_school_content' />
                            <img src='../../../series_images/high_school/rebelde.jpg' alt='rebelde' className='content high_school_content' />
                            <img src='../../../series_images/high_school/love_101.jpg' alt='love_101' className='content high_school_content' />
                            <img src='../../../series_images/high_school/back_to_15.jpg' alt='back_to_15' className='content high_school_content' />
                            <img src='../../../series_images/high_school/from_me_to_you.jpg' alt='from_me_to_you' className='content high_school_content' />
                            <img src='../../../series_images/high_school/sound_of_magic.jpg' alt='sound_of_magic' className='content high_school_content' />
                            <img src='../../../series_images/high_school/young_royals.jpg' alt='young_royals' className='content high_school_content' />
                            <img src='../../../series_images/high_school/school_17.webp' alt='school_17' className='content high_school_content' />
                            <img src='../../../series_images/high_school/boys_over_flower.webp' alt='boys_over_flower' className='content high_school_content' />
                            <img src='../../../series_images/high_school/who_are_you.webp' alt='who_are_you' className='content high_school_content' />
                        </Slider>
                    </div>
                </div>

                <div className='box fantasy'>
                    <h4 className='content-heading'>Fantasy</h4>
                    <div className='content_wrapper'>
                        <Slider {...settings}>
                            <img src='../../../series_images/fantasy/wednsday.jpg' alt='wednsday' className='content fantasy_content' />
                            <img src='../../../series_images/fantasy/once_upon_a_time.jpg' alt='once_upon_a_time' className='content fantasy_content' />
                            <img src='../../../series_images/fantasy/rising_dion.jpg' alt='rising_dion' className='content fantasy_content' />
                            <img src='../../../series_images/fantasy/sandman.jpg' alt='sandman' className='content fantasy_content' />
                            <img src='../../../series_images/fantasy/school_of_good_and_evil.jpg' alt='school_of_good_and_evil' className='content fantasy_content' />
                            <img src='../../../series_images/fantasy/secret_of_dumbledore.webp' alt='secret_of_dumbledore' className='content fantasy_content' />
                            <img src='../../../series_images/fantasy/the_last_airbender.webp' alt='the_lasr_airbender' className='content fantasy_content' />
                            <img src='../../../series_images/fantasy/troll.jpg' alt='troll' className='content fantasy_content' />
                        </Slider>
                    </div>
                </div>

                <div className='box new'>
                    <h4 className='content-heading'>New Releases</h4>
                    <div className='content_wrapper'>
                        <Slider {...settings}>
                            <img src='../../../series_images/new/a_soweto_love_story.jpg' alt='a_soweto_love_story' className='content new_release_content' />
                            <img src='../../../series_images/new/berline.jpg' alt='berline' className='content new_release_content' />
                            <img src='../../../series_images/new/boruto.webp' alt='boruto' className='content new_release_content' />
                            <img src='../../../series_images/new/comedy_chaos.jpg' alt='comedy_chaos' className='content new_release_content' />
                            <img src='../../../series_images/new/daydreamers.webp' alt='daydreamers' className='content new_release_content' />
                            <img src='../../../series_images/new/dragon_sakura.webp' alt='dragon_sakura' className='content new_release_content' />
                            <img src='../../../series_images/new/einstaine_and_bomb.jpg' alt='einstaine_and_bomb' className='content new_release_content' />
                            <img src='../../../series_images/new/eye_love_you.webp' alt='eye_love_you' className='content new_release_content' />
                            <img src='../../../series_images/new/fake_marrige.webp' alt='fake_marrige' className='content new_release_content' />
                            <img src='../../../series_images/new/good_doctore.webp' alt='good_doctore' className='content new_release_content' />
                            <img src='../../../series_images/new/good_morning_veronica.jpg' alt='good_morning_veronica' className='content new_release_content' />
                            <img src='../../../series_images/new/house_of_ninja.jpg' alt='house_of_ninja' className='content new_release_content' />
                            <img src='../../../series_images/new/kamla.webp' alt='kamla' className='content new_release_content' />
                            <img src='../../../series_images/new/law_and_order.webp' alt='law_and_order' className='content new_release_content' />
                            <img src='../../../series_images/new/love_is_blind.jpg' alt='love_is_blind' className='content new_release_content' />
                            <img src='../../../series_images/new/love_simon.webp' alt='love_simon' className='content new_release_content' />
                            <img src='../../../series_images/new/NCIS.webp' alt='NCIS' className='content new_release_content' />
                            <img src='../../../series_images/new/one_piece.webp' alt='one_piece' className='content new_release_content' />
                            <img src='../../../series_images/new/one_piece_Z.webp' alt='one_piece_Z' className='content new_release_content' />
                            <img src='../../../series_images/new/players.jpg' alt='players' className='content new_release_content' />
                            <img src='../../../series_images/new/ready_set_love.jpg' alt='ready_set_love' className='content new_release_content' />
                            <img src='../../../series_images/new/risque_bussiness.jpg' alt='risque_bussiness' className='content new_release_content' />
                            <img src='../../../series_images/new/romantic_problematic.webp' alt='romantic_problematic' className='content new_release_content' />
                            <img src='../../../series_images/new/strong_world.webp' alt='strong_world' className='content new_release_content' />
                            <img src='../../../series_images/new/world_trigger.webp' alt='world_trigger' className='content new_release_content' />
                        </Slider>
                    </div>
                </div>

                <div className='box action'>
                    <h4 className='content-heading'>Action & Adventure</h4>
                    <div className='content_wrapper'>
                        <Slider {...settings}>
                            <img src='../../../series_images/action_adventure/red_notice.jpg' alt='red_notice' className='content action_adventure_content' />
                            <img src='../../../series_images/action_adventure/spiderman_across_the_spiderverse.webp' alt='spiderman_across_the_spiderverse' className='content action_adventure_content' />
                            <img src='../../../series_images/action_adventure/enola_homes.jpg' alt='enola_homes' className='content action_adventure_content' />
                            <img src='../../../series_images/action_adventure/jack_the_giant_slayer.webp' alt='jack_the_giant_slayer' className='content action_adventure_content' />
                            <img src='../../../series_images/action_adventure/rebel_moon.jpg' alt='rebel_moon' className='content action_adventure_content' />
                            <img src='../../../series_images/action_adventure/batman.webp' alt='batman' className='content action_adventure_content' />
                            <img src='../../../series_images/action_adventure/aquaman.webp' alt='aquaman' className='content action_adventure_content' />
                            <img src='../../../series_images/action_adventure/enola_homes_2.jpg' alt='enola_homes_2' className='content action_adventure_content' />
                            <img src='../../../series_images/action_adventure/adam_project.jpg' alt='adam_project' className='content action_adventure_content' />
                            <img src='../../../series_images/action_adventure/jurasic_world.webp' alt='jurasic_world' className='content action_adventure_content' />
                            <img src='../../../series_images/action_adventure/mogali.jpg' alt='mogali.jpg' className='content action_adventure_content' />
                            <img src='../../../series_images/action_adventure/extraction_2.jpg' alt='extraction_2' className='content action_adventure_content' />
                            <img src='../../../series_images/action_adventure/tenet.webp' alt='tenet' className='content action_adventure_content' />
                            <img src='../../../series_images/action_adventure/assassins_creed.webp' alt='assassins_creed' className='content action_adventure_content' />
                            <img src='../../../series_images/action_adventure/300.webp' alt='300' className='content action_adventure_content' />
                            <img src='../../../series_images/action_adventure/man_of_steele.webp' alt='man_of_steele.webp' className='content action_adventure_content' />
                            <img src='../../../series_images/action_adventure/the_amazing_spiderman.webp' alt='the_amazing_spiderman' className='content action_adventure_content' />
                            <img src='../../../series_images/action_adventure/mortal_combat.webp' alt='mortal_combat' className='content action_adventure_content' />
                            <img src='../../../series_images/action_adventure/spiderman.webp' alt='spiderman' className='content action_adventure_content' />
                            <img src='../../../series_images/action_adventure/pacific_rim_uprising.webp' alt='pacific_rim_uprising' className='content action_adventure_content' />
                            <img src='../../../series_images/action_adventure/lucy.webp' alt='lucy' className='content action_adventure_content' />
                            <img src='../../../series_images/action_adventure/mortal_engine.webp' alt='mortal_engine' className='content action_adventure_content' />
                            <img src='../../../series_images/action_adventure/batman_vs_superman.webp' alt='batman_vs_superman' className='content action_adventure_content' />
                            <img src='../../../series_images/action_adventure/the_dark_knight.webp' alt='the_dark_knight' className='content action_adventure_content' />
                            <img src='../../../series_images/action_adventure/cursed.jpg' alt='cursed' className='content action_adventure_content' />
                        </Slider>
                    </div>
                </div>

                <div className='box animation'>
                    <h4 className='content-heading'>TV Animation</h4>
                    <div className='content_wrapper'>
                        <Slider {...settings}>
                            <img src='../../../series_images/animation/iron_man.webp' alt='iron_man' className='content animation_content' />
                            <img src='../../../series_images/animation/teen_titans_go.webp' alt='teen_titans_go' className='content animation_content' />
                            <img src='../../../series_images/animation/ladybug.jpg' alt='ladybug' className='content animation_content' />
                            <img src='../../../series_images/animation/justice-leage.webp' alt='justice-leage' className='content animation_content' />
                            <img src='../../../series_images/animation/oggy_and_cockroches.jpg' alt='oggy_and_cockroches' className='content animation_content' />
                            <img src='../../../series_images/animation/spongbog_squarepants.webp' alt='spongbog_squarepants' className='content animation_content' />
                            <img src='../../../series_images/animation/larva_island.jpg' alt='larva_island' className='content animation_content' />
                            <img src='../../../series_images/animation/cuphead_snow.jpg' alt='cuphead_snow' className='content animation_content' />
                            <img src='../../../series_images/animation/sonic_prime.jpg' alt='sonic_prime' className='content animation_content' />
                            <img src='../../../series_images/animation/dreamworld_wizard.jpg' alt='dreamworld_wizard' className='content animation_content' />
                            <img src='../../../series_images/animation/she-ra.jpg' alt='she-ra' className='content animation_content' />
                            <img src='../../../series_images/animation/boss_baby.jpg' alt='boss_baby' className='content animation_content' />
                            <img src='../../../series_images/animation/sciccor_seven.jpg' alt='sciccor_seven' className='content animation_content' />
                            <img src='../../../series_images/animation/jhonny_test.webp' alt='jhonny_test' className='content animation_content' />
                            <img src='../../../series_images/animation/maya_and_the_three.jpg' alt='maya_and_the_three' className='content animation_content' />
                            <img src='../../../series_images/animation/rainbow_high.webp' alt='rainbow_high' className='content animation_content' />
                            <img src='../../../series_images/animation/dreamworld_trollhunters.jpg' alt='dreamworld_trollhunters' className='content animation_content' />
                            <img src='../../../series_images/animation/unicorn_academy.jpg' alt='unicorn_academy' className='content animation_content' />
                            <img src='../../../series_images/animation/the-amazing_world_of_gumball.webp' alt='the-amazing_world_of_gumball' className='content animation_content' />
                            <img src='../../../series_images/animation/super_heroes_girl.webp' alt='super_heroes_girl' className='content animation_content' />
                            <img src='../../../series_images/animation/dreamworld_dragons.webp' alt='dreamworld_dragons' className='content animation_content' />
                            <img src='../../../series_images/animation/adventure_times.webp' alt='adventure_times' className='content animation_content' />
                            <img src='../../../series_images/animation/tom_and_jerry.webp' alt='tom_and_jerry' className='content animation_content' />
                            <img src='../../../series_images/animation/the_looney_toons.webp' alt='the_looney_toons' className='content animation_content' />
                            <img src='../../../series_images/animation/batman.webp' alt='batman' className='content animation_content' />
                            <img src='../../../series_images/animation/the_hollow.jpg' alt='the_hollow' className='content animation_content' />
                            <img src='../../../series_images/animation/oddballs.jpg' alt='oddballs' className='content animation_content' />
                        </Slider>
                    </div>
                </div>

            </div>

            <LandingFooter />

        </>
    )
}

export default SeriesContent;