class LeaveDamagesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_leave_damage, only: [:show, :update, :destroy]

  # GET /leave_damages
  def index
    @leave_damages = LeaveDamage.all

    render json: @leave_damages
  end

  # GET /leave_damages/1
  def show
    render json: @leave_damage
  end

  # POST /leave_damages
  def create
    @leave_damage = LeaveDamage.new(leave_damage_params)

    if @leave_damage.save
      render json: @leave_damage, status: :created, location: @leave_damage
    else
      render json: @leave_damage.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /leave_damages/1
  def update
    if @leave_damage.update(leave_damage_params)
      render json: @leave_damage
    else
      render json: @leave_damage.errors, status: :unprocessable_entity
    end
  end

  # DELETE /leave_damages/1
  def destroy
    @leave_damage.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_leave_damage
      @leave_damage = LeaveDamage.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def leave_damage_params
      params.require(:leave_damage).permit(:wetBrown, :dryBrown, :yellow, :losingLeaves, :parasites, :plant_id)
    end
end
